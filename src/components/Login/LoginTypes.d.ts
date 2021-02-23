interface LoginState {
  username: string;
  password: string;
  repeatPassword: string;
  isLoginMode: boolean;
  isLoading: boolean;
  error: string;
}

type Action =
  | {
      type: 'field';
      name: string;
      payload: string;
    }
  | {
      type: 'switchMode';
    }
  | {
      type: 'success';
    }
  | {
      type: 'reject';
      payload: string;
    }
  | {
      type: 'proceed';
    };

type LoginReducer = (state: LoginState, action: Action) => LoginState;
