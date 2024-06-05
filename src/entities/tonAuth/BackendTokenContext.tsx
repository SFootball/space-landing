import { createContext, useContext } from "react";

type TokenContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const BackendTokenContext = createContext<TokenContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useBackendToken = () => {
  const context = useContext(BackendTokenContext);
  if (!context) {
    throw new Error(
      "useBackendToken must be used within a BackendTokenProvider"
    );
  }
  return context;
};
