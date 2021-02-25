import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';
import Logo from 'assets/images/socnet-logo.png';
import { Navigation, OptionsWrapper } from './Nav.styles';

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
      {auth.isLoggedIn && (
        <OptionsWrapper>
          <li>
            <Link to='/profile'>My Profile</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </OptionsWrapper>
      )}
    </Navigation>
  );
};

export default Header;
