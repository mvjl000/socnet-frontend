import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavLinks } from './NavLinks.styles';

interface NavLinksProps {
  handleLogout: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleLogout }) => {
  return (
    <StyledNavLinks>
      <li>
        <Link to='/profile'>My Profile</Link>
      </li>
      <li onClick={handleLogout}>Logout</li>
    </StyledNavLinks>
  );
};

export default NavLinks;
