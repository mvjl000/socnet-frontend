import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/globalStyles';
import AuthContext from 'context/auth-context';
import ReportsProvider from 'context/reportsProvider';
import Header from 'components/Nav/Nav';
import Login from 'components/Login/Login';
import Main from 'views/Main/Main';
import Profile from 'views/Profile/Profile';
import AddPost from 'views/AddPost/AddPost';
import CommentPage from 'views/CommentPage/CommentPage';
import AdminPage from 'views/AdminPage/AdminPage';
import About from 'views/About/About';
import SearchResultsPage from './SearchResults/SearchResultsPage';
import { Wrapper } from './Root.styles';
import { useAuth } from 'hooks/useAuth';
import { useScreenInfo } from 'hooks/useScreenInfo';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Root: React.FC = () => {
  const { token, loginUser, logoutUser, userData } = useAuth();
  const { isNavExpanded } = useScreenInfo();
  const { errorMessage } = useError();

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/new-post" component={AddPost} />
        <Route path="/post/:postId" component={CommentPage} />
        <Route path="/profile/:uname" component={Profile} />
        <Route path="/search-results/:uname" component={SearchResultsPage} />
        <Route path="/about" component={About} />
        {userData![0] === process.env.REACT_APP_ADMIN_ID ? (
          <ReportsProvider>
            <Route path="/admin" component={AdminPage} />
          </ReportsProvider>
        ) : null}
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/about" component={About} />
        <Redirect to="/" />
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
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <Wrapper>
          <Header isNavExpanded={isNavExpanded} />
          {routes}
        </Wrapper>
      </Router>
    </AuthContext.Provider>
  );
};

export default Root;
