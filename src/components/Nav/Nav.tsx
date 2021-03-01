import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';
import Logo from 'assets/images/socnet-logo.png';
import {
  Navigation,
  BurgerButton,
  BurgerContainer,
  DesktopNavLinksContainer,
} from './Nav.styles';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DropDownMenu from './DropDownMenu';
import NavLinks from './NavLinks';

interface NavProps {
  isNavExpanded: boolean;
}

const Header: React.FC<NavProps> = ({ isNavExpanded }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const auth = useContext(AuthContext);

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
            />
          </DropDownMenu>
        )}
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        {auth.isLoggedIn && (
          <DesktopNavLinksContainer>
            <NavLinks handleLogout={handleLogout} />
          </DesktopNavLinksContainer>
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
