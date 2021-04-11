import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';
import { useToggleSearchBar } from 'hooks/useToggleSearchBar';
import { StyledNavLinks } from './NavLinks.styles';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchBar from 'components/SearchBar/SearchBar';

interface NavLinksProps {
  handleLogout: () => void;
  closeDropDown?: () => void;
  username: string
};

const NavLinks: React.FC<NavLinksProps> = ({ closeDropDown, handleLogout, username }) => {
  const { isSearchBarVisible } = useToggleSearchBar(true);
  const auth = useContext(AuthContext);

  const handleLogoutClick = () => {
  if (closeDropDown) {
    closeDropDown();
  };
  handleLogout();
}

  return (
    <StyledNavLinks>
      {isSearchBarVisible && <li>
        <SearchBar closeDropDown={closeDropDown}/>
      </li>}
      {auth.userData![0] === process.env.REACT_APP_ADMIN_ID && <li>
        <NavLink to='/admin' onClick={closeDropDown}>
          Admin Page
        </NavLink>
      </li>}
      <li>
        <NavLink to={`/profile/${username}`} onClick={closeDropDown}>
          {username}
          <PersonIcon />
        </NavLink>
      </li>
      <li onClick={handleLogoutClick}>
        Logout <ExitToAppIcon />
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
