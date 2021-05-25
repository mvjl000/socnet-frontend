import { useContext, useEffect } from 'react';
import { ErrorContext } from 'context/errorProvider';

export const useError = () => {
  const errorContext = useContext(ErrorContext);
  const { errorMessage, dispatchError } = errorContext;

  if (!errorContext) {
    throw Error('useError needs to be used inside ErrorContext');
  }

  useEffect(() => {
    if (!errorMessage) return;

    const timer = setTimeout(() => {
      dispatchError('');
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  return errorContext;
};
