import { useEffect, useState } from 'react';
import { loginTypes } from 'context/auth-context';

let logoutTimer: NodeJS.Timeout;

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>(
    null
  );
  const [userData, setUserData] = useState<
    [userId: string, username: string] | null
  >(null);

  const loginUser: loginTypes = (uid, username, token, expirationDate) => {
    setUserData([uid, username]);
    setToken(token);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        username,
        token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  };

  const logoutUser = () => {
    setUserData(null);
    setTokenExpirationDate(null);
    setToken(null);
    localStorage.removeItem('userData');
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData')!);
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      loginUser(
        storedData.userId,
        storedData.username,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logoutUser, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpirationDate]);

  return { token, loginUser, logoutUser, userData };
};
