import React, { useContext, useReducer, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from 'shared/context/auth-context';
import Loader from 'shared/components/Loader';
import PickImage from './PickImage';
import {
  Button,
  CreateAccountButton,
  Header,
  Input,
  Wrapper,
  ErrorMessage,
  ToggleVisibilityButton,
} from './Login.styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const initialState: LoginState = {
  username: '',
  password: '',
  repeatPassword: '',
  isLoginMode: true,
  isLoading: false,
  error: '',
};

const loginReducer: LoginReducer = (state, action) => {
  switch (action.type) {
    case 'proceed':
      return {
        ...state,
        isLoading: true,
      };
    case 'success':
      return {
        ...state,
        isLoading: false,
      };
    case 'reject':
      return {
        ...state,
        username: '',
        password: '',
        repeatPassword: '',
        isLoading: false,
        error: action.payload,
      };
    case 'field':
      return {
        ...state,
        error: '',
        [action.name]: action.payload,
      };
    case 'switchMode':
      return {
        ...state,
        username: '',
        password: '',
        repeatPassword: '',
        isLoginMode: !state.isLoginMode,
        error: '',
      };
    default:
      return {
        ...state,
      };
  }
};

const Login: React.FC = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(
    false
  );
  const [isPickImageMode, setIsPickImageMode] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();

  const {
    username,
    password,
    repeatPassword,
    isLoginMode,
    isLoading,
    error,
  } = state;

  const handleLoginFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (
      isLoginMode &&
      username.trim().length > 0 &&
      password.trim().length > 0
    ) {
      dispatch({ type: 'proceed' });
      try {
        const responseData = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/login`,
          {
            username,
            password,
          }
        );
        dispatch({ type: 'success' });
        auth.login(
          responseData.data.userId,
          responseData.data.username,
          responseData.data.token
        );
      } catch (error) {
        dispatch({
          type: 'reject',
          payload: error.response
            ? error.response.data.message
            : 'Unexpted error occured.',
        });
      }
    } else if (
      !isLoginMode &&
      username.length >= 3 &&
      password.length >= 5 &&
      password === repeatPassword
    ) {
      setIsPickImageMode(true);
      // dispatch({ type: 'proceed' });
      // try {
      //   await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, {
      //     username,
      //     password,
      //     repeatPassword,
      //   });
      //   dispatch({ type: 'success' });
      //   dispatch({ type: 'switchMode' });
      //   history.push('/');
      // } catch (error) {
      //   dispatch({
      //     type: 'reject',
      //     payload: error.response
      //       ? error.response.data.message
      //       : 'Unexpted error occured.',
      //   });
      // }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'field',
      name: event.target.name,
      payload: event.target.value,
    });

  const handleToggleMode = () => {
    dispatch({ type: 'switchMode' });
  };

  const handleTogglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const handleToggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  return (
    <>
    {isPickImageMode === false ? (
      <Wrapper onSubmit={handleLoginFormSubmit}>
      <Header>{isLoginMode ? 'Log in' : 'Create account'}</Header>
      <label htmlFor=''>
        Username
        <Input
          type='text'
          name='username'
          value={username}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor=''>
        Password
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <ToggleVisibilityButton
          type='button'
          onClick={handleTogglePasswordVisibility}
        >
          {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </ToggleVisibilityButton>
      </label>
      {!isLoginMode && (
        <label htmlFor=''>
          Confirm password
          <Input
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            name='repeatPassword'
            value={repeatPassword}
            onChange={handleInputChange}
            expand={true}
          />
          <ToggleVisibilityButton
            type='button'
            onClick={handleToggleConfirmPasswordVisibility}
          >
            {isConfirmPasswordVisible ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon />
            )}
          </ToggleVisibilityButton>
        </label>
      )}
      <Button type='submit'>{isLoginMode ? 'Sign in' : 'Next step'}</Button>
      <CreateAccountButton type='button' onClick={handleToggleMode}>
        {isLoginMode ? 'Create account' : 'Switch to login'}
      </CreateAccountButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Loader />}
    </Wrapper>
    ) : (
      <PickImage />
    )}
    </>
  );
};

export default Login;
