interface LoginState {
  username: string;
  password: string;
  repeatPassword: string;
  isLoginMode: boolean;
}

type Action =
  | {
      type: 'field';
      fieldName: string;
      payload: string;
    }
  | {
      type: 'switchMode';
    };

type LoginReducer = (state: LoginState, action: Action) => LoginState;
