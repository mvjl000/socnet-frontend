import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from 'components/Nav/Nav';
import Login from 'components/Login/Login';
import { Wrapper } from './Root.styles';

const Root: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const changeNav = () => {
    window.scrollY > 100 ? setIsNavExpanded(false) : setIsNavExpanded(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Router>
      <Wrapper>
        <Header isNavExpanded={isNavExpanded} />
        <Switch>
          <Route path='/' component={Login} exact />
          <Redirect to='/' />
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default Root;
