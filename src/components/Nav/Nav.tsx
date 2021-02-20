import React from 'react';
import Logo from 'assets/images/socnet-logo.png';
import { Navigation } from './Nav.styles';

interface NavProps {
  isNavExpanded: boolean;
}

const Header: React.FC<NavProps> = ({ isNavExpanded }) => {
  return (
    <Navigation biggerNav={isNavExpanded}>
      <img src={Logo} alt='logo' />
    </Navigation>
  );
};

export default Header;
