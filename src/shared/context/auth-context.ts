import { createContext } from 'react';

export type loginTypes = (uid: string, username: string, token: string) => void;

interface AuthContextTypes {
  isLoggedIn: boolean;
  token: string | null;
  userData: [userId: string, username: string] | null;
  login: loginTypes;
  logout: () => void;
}

const AuthContext = createContext<AuthContextTypes>({
  isLoggedIn: false,
  userData: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
