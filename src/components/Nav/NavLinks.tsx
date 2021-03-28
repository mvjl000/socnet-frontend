import React from 'react';
import { NavLink } from 'react-router-dom';
import { useToggleSearchBar } from 'hooks/useToggleSearchBar';
import { StyledNavLinks } from './NavLinks.styles';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchBar from 'components/SearchBar/SearchBar';

interface NavLinksProps {
  handleLogout: () => void;
  closeDropDown?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeDropDown, handleLogout }) => {
  const { isSearchBarVisible } = useToggleSearchBar(true);

  return (
    <StyledNavLinks>
      {isSearchBarVisible && <li>
        <SearchBar/>
      </li>}
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
