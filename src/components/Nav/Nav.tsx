import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';
import Logo from 'assets/images/socnet-logo.png';
import { Navigation } from './Nav.styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import NavLinks from './NavLinks';

interface NavProps {
  isNavExpanded: boolean;
}

const Header: React.FC<NavProps> = ({ isNavExpanded }) => {
  const auth = useContext(AuthContext);

  const handleLogout = () => auth.logout();

  return (
    <Navigation biggerNav={isNavExpanded}>
      <Link to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      {auth.isLoggedIn && <NavLinks handleLogout={handleLogout} />}
    </Navigation>
  );
};

export default Header;
