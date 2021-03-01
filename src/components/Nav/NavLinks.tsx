import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavLinks } from './NavLinks.styles';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

interface NavLinksProps {
  handleLogout: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleLogout }) => {
  return (
    <StyledNavLinks>
      <li>
        <Link to='/profile'>
          My Profile
          <PersonIcon />
        </Link>
      </li>
      <li onClick={handleLogout}>
        Logout <ExitToAppIcon />
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
