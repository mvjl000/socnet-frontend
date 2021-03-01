import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavLinks } from './NavLinks.styles';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

interface NavLinksProps {
  handleLogout: () => void;
  closeDropDown?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeDropDown, handleLogout }) => {
  return (
    <StyledNavLinks>
      <li>
        <NavLink to='/profile' onClick={closeDropDown}>
          My Profile
          <PersonIcon />
        </NavLink>
      </li>
      <li onClick={handleLogout}>
        Logout <ExitToAppIcon />
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
