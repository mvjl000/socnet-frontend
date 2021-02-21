interface LoginState {
  username: string;
  password: string;
  repeatPassword: string;
  isLoginMode: boolean;
  isLoading: boolean;
}

type Action =
  | {
      type: 'field';
      fieldName: string;
      payload: string;
    }
  | {
      type: 'switchMode';
    }
  | {
      type: 'login' | 'register';
    };

type LoginReducer = (state: LoginState, action: Action) => LoginState;
