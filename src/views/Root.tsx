import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/globalStyles';
import AuthContext, { loginTypes } from 'shared/context/auth-context';
import Header from 'components/Nav/Nav';
import Login from 'components/Login/Login';
import Main from 'views/Main/Main';
import Profile from 'views/Profile/Profile';
import AddPost from 'views/AddPost/AddPost';
import { Wrapper } from './Root.styles';

let logoutTimer: NodeJS.Timeout;

const Root: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>(
    null
  );
  const [userData, setUserData] = useState<
    [userId: string, username: string] | null
  >(null);

  const changeNav = () => {
    window.scrollY > 100 ? setIsNavExpanded(false) : setIsNavExpanded(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const loginUser: loginTypes = (uid, username, token, expirationDate) => {
    setUserData([uid, username]);
    setToken(token);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        username,
        token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  };

  const logoutUser = () => {
    setUserData(null);
    setTokenExpirationDate(null);
    setToken(null);
    localStorage.removeItem('userData');
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData')!);
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      loginUser(
        storedData.userId,
        storedData.username,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logoutUser, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpirationDate]);

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/profile' component={Profile} />
        <Route path='/new-post' component={AddPost} />
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' component={Login} exact />
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userData: userData,
        login: loginUser,
        logout: logoutUser,
      }}
    >
      <Router>
        <GlobalStyle />
        <Wrapper>
          <Header isNavExpanded={isNavExpanded} />
          {routes}
        </Wrapper>
      </Router>
    </AuthContext.Provider>
  );
};

export default Root;
