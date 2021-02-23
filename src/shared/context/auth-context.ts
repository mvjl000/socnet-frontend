import { createContext } from 'react';

interface AuthContextTypes {
  isLoggedIn: boolean;
  userData: [userId: string, username: string] | null;
  login: (uid: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextTypes>({
  isLoggedIn: false,
  userData: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
