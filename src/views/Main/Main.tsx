import React, { useContext } from 'react';
import AuthContext from 'shared/context/auth-context';

const Main: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <h1>Hello {auth.userData![1]}</h1>
      <button onClick={() => auth.logout()}>Logout</button>
    </>
  );
};

export default Main;
