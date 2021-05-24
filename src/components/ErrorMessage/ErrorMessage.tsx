import { Wrapper } from './ErrorMessage.styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>{message}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
