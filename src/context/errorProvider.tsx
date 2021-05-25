import { createContext, useCallback, useState } from 'react';

interface ErrorContextProps {
  errorMessage: string | null;
  dispatchError: (message: string) => void;
}

export const ErrorContext = createContext<ErrorContextProps>({
  errorMessage: null,
  dispatchError: () => {},
});

const ErrorProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const dispatchError = useCallback((message) => {
    setError(message);
  }, []);

  return (
    <ErrorContext.Provider value={{ errorMessage: error, dispatchError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
