import React from 'react';
import { Button, Wrapper } from './Login.styles';

const Login: React.FC = () => {
  const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Wrapper onSubmit={handleLoginFormSubmit}>
      <label htmlFor=''>
        Username
        <input type='text' />
      </label>
      <label htmlFor=''>
        Password
        <input type='password' />
      </label>
      <Button type='submit'>Login</Button>
    </Wrapper>
  );
};

export default Login;
