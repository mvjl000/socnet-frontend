import React, { useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from 'context/auth-context';
import { useError } from 'hooks/useError';
import Loader from 'shared/components/Loader';
import CookiesConsent from './CookiesConsent/CookiesConsent';
import AboutButton from 'shared/components/AboutButton';
import {
  Button,
  CreateAccountButton,
  Header,
  Input,
  Wrapper,
  ErrorMessage,
  ToggleVisibilityButton,
  PhotosWrapper,
  ProfilePhotoContainer,
  ProfilePhoto,
} from './Login.styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const initialState: LoginState = {
  username: '',
  password: '',
  repeatPassword: '',
  currentMode: 'LOGIN',
  isLoading: false,
  error: '',
  profilePicture: '',
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
        currentMode: action.payload,
        error: '',
      };
    case 'selectImage':
      return {
        ...state,
        profilePicture: action.payload,
      };
    case 'clearState':
      return initialState;
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
  const [isLoginOrFill, setIsLoginOrFill] = useState(true);
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  const [isConsentOpen, setIsConsentOpen] = useState(true);
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { dispatchError } = useError();

  const {
    username,
    password,
    repeatPassword,
    currentMode,
    isLoading,
    error,
    profilePicture,
  } = state;

  useEffect(() => {
    const reqData = async () => {
      try {
        const responseData = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user/profilePictures`
        );
        setAvailableImages(responseData.data.images);
      } catch (error) {
        dispatchError(error.response.data.message);
      }
    };
    reqData();
  }, [currentMode]);

  const handleLoginFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (
      currentMode === 'LOGIN' &&
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
        dispatchError(error.response.data.message);
        dispatch({
          type: 'reject',
          payload: '',
        });
      }
    } else if (
      currentMode === 'FILL' &&
      username.length >= 3 &&
      password.length >= 5 &&
      password === repeatPassword
    ) {
      dispatch({ type: 'switchMode', payload: 'PICK_IMAGE' });
    } else if (currentMode === 'PICK_IMAGE' && profilePicture.length > 0) {
      dispatch({ type: 'proceed' });
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, {
          username,
          password,
          repeatPassword,
          image: profilePicture,
        });
        dispatch({ type: 'success' });
        dispatch({ type: 'clearState' });
        dispatch({ type: 'switchMode', payload: 'LOGIN' });
        history.push('/');
      } catch (error) {
        dispatchError(error.response.data.message);
        dispatch({
          type: 'reject',
          payload: '',
        });
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'field',
      name: event.target.name,
      payload: event.target.value,
    });

  const handleToggleMode = () => {
    if (currentMode === 'LOGIN') {
      dispatch({ type: 'switchMode', payload: 'FILL' });
    } else {
      dispatch({ type: 'switchMode', payload: 'LOGIN' });
    }
  };

  const handleTogglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const handleToggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const handleImageClick = (image: string) =>
    dispatch({ type: 'selectImage', payload: image });

  useEffect(() => {
    if (currentMode === 'LOGIN' || currentMode === 'FILL') {
      setIsLoginOrFill(true);
    } else {
      setIsLoginOrFill(false);
    }
  }, [currentMode]);

  const closeConsent = () => setIsConsentOpen(false);

  return (
    <>
      <AboutButton />
      {isLoginOrFill ? (
        <Wrapper onSubmit={handleLoginFormSubmit}>
          <Header>
            {currentMode === 'LOGIN' ? 'Log in' : 'Create account'}
          </Header>
          <label htmlFor="">
            Username
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Password
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <ToggleVisibilityButton
              type="button"
              onClick={handleTogglePasswordVisibility}
            >
              {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </ToggleVisibilityButton>
          </label>
          {currentMode === 'FILL' && (
            <label htmlFor="">
              Confirm password
              <Input
                type={isConfirmPasswordVisible ? 'text' : 'password'}
                name="repeatPassword"
                value={repeatPassword}
                onChange={handleInputChange}
                expand={true}
              />
              <ToggleVisibilityButton
                type="button"
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
          <Button type="submit">
            {currentMode === 'LOGIN' ? 'Sign in' : 'Next step'}
          </Button>
          <CreateAccountButton type="button" onClick={handleToggleMode}>
            {currentMode === 'LOGIN' ? 'Create account' : 'Switch to login'}
          </CreateAccountButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {isLoading && <Loader />}
        </Wrapper>
      ) : (
        <Wrapper onSubmit={handleLoginFormSubmit}>
          <Header>Pick profile picture</Header>
          <PhotosWrapper>
            {availableImages.length > 0 &&
              availableImages.map((image) => {
                let isImageActive = image === profilePicture;
                return (
                  <ProfilePhotoContainer
                    key={image}
                    onClick={() => handleImageClick(image)}
                    isActive={isImageActive}
                  >
                    <ProfilePhoto
                      src={`${process.env.REACT_APP_ASSETS_URL}/${image}`}
                    />
                  </ProfilePhotoContainer>
                );
              })}
          </PhotosWrapper>
          <Button>Sign up</Button>
          <CreateAccountButton type="button" onClick={handleToggleMode}>
            {currentMode === 'LOGIN' ? 'Create account' : 'Switch to login'}
          </CreateAccountButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Wrapper>
      )}
      {isConsentOpen && <CookiesConsent handleCloseConsent={closeConsent} />}
    </>
  );
};

export default Login;
