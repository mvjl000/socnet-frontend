import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/globalStyles';
import AuthContext from 'shared/context/auth-context';
import PostsProvider from 'shared/context/postsProvider';
import Header from 'components/Nav/Nav';
import Login from 'components/Login/Login';
import Main from 'views/Main/Main';
import Profile from 'views/Profile/Profile';
import AddPost from 'views/AddPost/AddPost';
import { Wrapper } from './Root.styles';
import { useAuth } from 'hooks/useAuth';
import { useScreenInfo } from 'hooks/useScreenInfo';

const Root: React.FC = () => {
  const { token, loginUser, logoutUser, userData } = useAuth();
  const { isNavExpanded } = useScreenInfo();

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/profile/:uname' component={Profile} />
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
        <PostsProvider>
          <Wrapper>
            <Header isNavExpanded={isNavExpanded} />
            {routes}
          </Wrapper>
        </PostsProvider>
      </Router>
    </AuthContext.Provider>
  );
};

export default Root;
