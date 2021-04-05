type formModes = 'LOGIN' | 'FILL' | 'PICK_IMAGE'

interface LoginState {
  username: string;
  password: string;
  repeatPassword: string;
  currentMode: formModes;
  isLoading: boolean;
  error: string;
  profilePicture: string;
}

type Action =
  | {
      type: 'field';
      name: string;
      payload: string;
    }
  | {
      type: 'switchMode';
      payload: formModes;
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
    }
  | {
      type: 'selectImage';
      payload: string;
    }
  | {
      type: 'clearState';
    };

type LoginReducer = (state: LoginState, action: Action) => LoginState;
