import { createContext } from 'react';

interface AuthContextTypes {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextTypes>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
