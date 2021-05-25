import { createPortal } from 'react-dom';
import { Wrapper } from './ErrorMessage.styles';

export interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return createPortal(
    <Wrapper>
      <h1>Oops!</h1>
      <p>{message || 'Something went wrong, please try again later.'}</p>
    </Wrapper>,
    document.getElementById('error-container')!
  );
};

export default ErrorMessage;
