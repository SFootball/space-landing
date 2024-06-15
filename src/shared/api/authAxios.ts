import axios from "axios";
import { localStorageAuthTokenKey } from "../constants/localStorageKeys";

export const axiosAuth = axios.create();

//we intercept every requests
// axiosAuth.interceptors.request.use(async function(config){
//     //anything you want to attach to the requests such as token
//     return config;
// }, error => {
//     return Promise.reject(error)
// })

//intercept every response
axiosAuth.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 401) {
      // reset token in localStorage
      localStorage.removeItem(localStorageAuthTokenKey);
    }
    return Promise.reject(error);
  }
);
