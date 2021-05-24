import { useContext } from 'react';
import { ErrorContext } from 'context/errorProvider';

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useError needs to be used inside ErrorContext');
  }

  return errorContext;
};
