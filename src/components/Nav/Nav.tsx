import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';
import Logo from 'assets/images/socnet-logo.png';
import { Navigation, BurgerButton, BurgerContainer } from './Nav.styles';
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

  return (
    <>
      <Navigation biggerNav={isNavExpanded}>
        <DropDownMenu isDropDownOpen={isBurgerActive}>
          <h1>Hello portal</h1>
        </DropDownMenu>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        {/* {auth.isLoggedIn && <NavLinks handleLogout={handleLogout} />} */}
        {/* <NavLinks handleLogout={handleLogout} /> */}
      </Navigation>
      <BurgerContainer biggerNav={isNavExpanded}>
        <BurgerButton
          isBurgerActive={isBurgerActive}
          onClick={toggleBurgerButton}
        >
          <span></span>
        </BurgerButton>
      </BurgerContainer>
    </>
  );
};

export default Header;
