import { Wrapper } from './ErrorMessage.styles';

export interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong, please try again later.',
}) => {
  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>{message}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
