import React, { useReducer } from 'react';
import { Button, CreateAccountButton, Header, Wrapper } from './Login.styles';

const initialState: LoginState = {
  username: '',
  password: '',
  repeatPassword: '',
  isLoginMode: true,
};

const loginReducer: LoginReducer = (state, action) => {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case 'switchMode':
      return {
        ...state,
        isLoginMode: !state.isLoginMode,
      };
    default:
      return {
        ...state,
      };
  }
};

const Login: React.FC = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, repeatPassword, isLoginMode } = state;

  const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, password);
  };

  const handleToggleMode = () => dispatch({ type: 'switchMode' });

  return (
    <Wrapper onSubmit={handleLoginFormSubmit}>
      <Header>{isLoginMode ? 'Log in' : 'Create account'}</Header>
      <label htmlFor=''>
        Username
        <input
          type='text'
          value={username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: 'field',
              fieldName: 'username',
              payload: event.target.value,
            })
          }
        />
      </label>
      <label htmlFor=''>
        Password
        <input
          type='password'
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: 'field',
              fieldName: 'password',
              payload: event.target.value,
            })
          }
        />
      </label>
      <Button type='submit'>Login</Button>
      <CreateAccountButton onClick={handleToggleMode}>
        {isLoginMode ? 'Create account' : 'Switch to login'}
      </CreateAccountButton>
    </Wrapper>
  );
};

export default Login;
