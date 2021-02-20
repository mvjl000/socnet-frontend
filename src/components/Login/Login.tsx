import React from 'react';
import { Wrapper } from './Login.styles';

const Login: React.FC = () => {
  return (
    <Wrapper>
      <label htmlFor=''>
        Username
        <input type='text' />
      </label>
      <label htmlFor=''>
        Password
        <input type='text' />
      </label>
    </Wrapper>
  );
};

export default Login;
