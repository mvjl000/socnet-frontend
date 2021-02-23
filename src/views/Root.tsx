import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/globalStyles';
import AuthContext from 'shared/context/auth-context';
import Header from 'components/Nav/Nav';
import Login from 'components/Login/Login';
import Main from 'views/Main/Main';
import { Wrapper } from './Root.styles';

const Root: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
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

  const loginUser = (uid: string, username: string) => {
    setUserData([uid, username]);
    setIsUserLoggedIn(true);
  };

  const logoutUser = () => {
    setUserData(null);
    setIsUserLoggedIn(false);
  };

  let routes;
  if (isUserLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' component={Main} exact />
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
        isLoggedIn: isUserLoggedIn,
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
