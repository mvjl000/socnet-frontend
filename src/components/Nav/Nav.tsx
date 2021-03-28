import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToggleSearchBar } from 'hooks/useToggleSearchBar';
import AuthContext from 'shared/context/auth-context';
import Logo from 'assets/images/socnet-logo.png';
import {
  Navigation,
  BurgerButton,
  BurgerContainer,
  DesktopNavLinksContainer,
} from './Nav.styles';
import DropDownMenu from './DropDownMenu';
import NavLinks from './NavLinks';
import SearchBar from 'components/SearchBar/SearchBar';

interface NavProps {
  isNavExpanded: boolean;
}

const Header: React.FC<NavProps> = ({ isNavExpanded }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const auth = useContext(AuthContext);
  const { isSearchBarVisible } = useToggleSearchBar(false);

  const handleLogout = () => auth.logout();

  const toggleBurgerButton = () => setIsBurgerActive(!isBurgerActive);

  const closeDropDown = () => setIsBurgerActive(false);

  return (
    <>
      <Navigation biggerNav={isNavExpanded}>
        {auth.isLoggedIn && (
          <DropDownMenu
            isDropDownOpen={isBurgerActive}
            closeDropDown={closeDropDown}
          >
            <NavLinks
              handleLogout={handleLogout}
              closeDropDown={closeDropDown}
              username={auth.userData![1]}
            />
          </DropDownMenu>
        )}
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        {auth.isLoggedIn && (
          <>
          {isSearchBarVisible && <SearchBar/>}
          <DesktopNavLinksContainer>
            <NavLinks handleLogout={handleLogout} username={auth.userData![1]} />
          </DesktopNavLinksContainer>
          </>
        )}
      </Navigation>
      {auth.isLoggedIn && (
        <BurgerContainer biggerNav={isNavExpanded}>
          <BurgerButton
            isBurgerActive={isBurgerActive}
            onClick={toggleBurgerButton}
          >
            <span></span>
          </BurgerButton>
        </BurgerContainer>
      )}
    </>
  );
};

export default Header;
