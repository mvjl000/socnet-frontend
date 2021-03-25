import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavLinks } from './NavLinks.styles';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchBar from 'components/SearchBar/SearchBar';

interface NavLinksProps {
  handleLogout: () => void;
  closeDropDown?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeDropDown, handleLogout }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(window.innerWidth < 1025);
  
  const toggleResize = () => window.innerWidth < 1025 ? setIsSearchBarVisible(true) : setIsSearchBarVisible(false);

  useEffect(() => {
    window.addEventListener('resize', toggleResize);

    return () => window.removeEventListener('resize', toggleResize);
  }, []);

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
