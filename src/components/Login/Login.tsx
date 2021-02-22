import React, { useReducer } from 'react';
import axios from 'axios';
import Loader from 'shared/components/Loader';
import { Button, CreateAccountButton, Header, Wrapper } from './Login.styles';

const initialState: LoginState = {
  username: '',
  password: '',
  repeatPassword: '',
  isLoginMode: true,
  isLoading: false,
};

const loginReducer: LoginReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isLoading: true,
      };
    case 'register':
      return {
        ...state,
        isLoading: true,
      };
    case 'field':
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case 'switchMode':
      return {
        ...state,
        username: '',
        password: '',
        repeatPassword: '',
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

  const { username, password, repeatPassword, isLoginMode, isLoading } = state;

  const handleLoginFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isLoginMode && username.length > 0 && password.length > 0) {
      try {
        const responseData = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/login`,
          {
            username,
            password,
          }
        );
        console.log(responseData.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
      dispatch({ type: 'login' });
    } else if (
      !isLoading &&
      username.length >= 3 &&
      password.length >= 5 &&
      password === repeatPassword
    ) {
      try {
        const responseData = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/signup`,
          {
            username,
            password,
            repeatPassword,
          }
        );
        console.log(responseData.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
      dispatch({ type: 'register' });
    }
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
      {!isLoginMode && (
        <label htmlFor=''>
          Repeat password
          <input
            type='password'
            value={repeatPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: 'field',
                fieldName: 'repeatPassword',
                payload: event.target.value,
              })
            }
          />
        </label>
      )}
      <Button type='submit'>{isLoginMode ? 'Sign in' : 'Sign up'}</Button>
      <CreateAccountButton type='button' onClick={handleToggleMode}>
        {isLoginMode ? 'Create account' : 'Switch to login'}
      </CreateAccountButton>
      {isLoading && <Loader />}
    </Wrapper>
  );
};

export default Login;
