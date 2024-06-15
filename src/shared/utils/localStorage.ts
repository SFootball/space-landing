import { localStorageAuthTokenKey } from "../constants/localStorageKeys";

export const getAuthTokenFromLS = (): string | null | undefined => {
  return localStorage.getItem(localStorageAuthTokenKey);
};

export const setAuthTokenToLS = (token: string) => {
  localStorage.setItem(localStorageAuthTokenKey, token);
};
