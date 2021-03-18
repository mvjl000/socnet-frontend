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
import Profile from 'views/Profile/Profile';
import AddPost from 'views/AddPost/AddPost';
import { Wrapper } from './Root.styles';
import { useAuth } from 'hooks/useAuth';
import { useNavExpand } from 'hooks/useNavExpand';

const Root: React.FC = () => {
  const { token, loginUser, logoutUser, userData } = useAuth();
  const { isNavExpanded } = useNavExpand();

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
