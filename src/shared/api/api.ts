import { localStorageAuthTokenKey } from "../constants/localStorageKeys";
import { axiosAuth } from "./authAxios";
import { Configuration } from "./swagger";
import { UsersApi, PlayersApi, TasksApi, AuthApi } from "./swagger/api";

// const basePath = "http://localhost:5050";
const basePath = import.meta.env.VITE_API_URL;

// class CustomConf extends Configuration {
//   constructor() {
//     super();
//     this.basePath = basePath;
//     this.accessToken = localStorage.getItem(localStorageAuthTokenKey) || "";
//   }
// }

export class MainApi {
  basePath: string;
  accessToken: string | null;
  conf: Configuration;
  usersApi: UsersApi;
  playersApi: PlayersApi;
  tasksApi: TasksApi;
  authApi: AuthApi;
  constructor() {
    this.basePath = basePath;
    this.accessToken = localStorage.getItem(localStorageAuthTokenKey) || "";
    this.conf = new Configuration({
      basePath: this.basePath,
      accessToken: this.accessToken,
      baseOptions: {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      },
    });

    this.usersApi = new UsersApi(this.conf, this.basePath, axiosAuth);
    this.playersApi = new PlayersApi(this.conf, this.basePath, axiosAuth);
    this.tasksApi = new TasksApi(this.conf, this.basePath, axiosAuth);
    this.authApi = new AuthApi(this.conf, this.basePath, axiosAuth);
  }

  resetAuthJwtTocken = () => {
    localStorage.removeItem(localStorageAuthTokenKey);
    this.authApi.apiAuthTonproofGeneratePayloadPost();
  };
}

export const mainApi = new MainApi();

// const configuration = new CustomConf();

// const configuration = new Configuration({
//   basePath,
// });

// export const usersApi = new UsersApi();
// export const usersApi = new UsersApi(configuration, basePath);

// export const playersApi = new PlayersApi();

// export const tasksApi = new TasksApi(configuration, basePath);

// export const authApi = new AuthApi(configuration, basePath);

// export const resetAuthJwtTocken = () => {
//   localStorage.removeItem(localStorageAuthTokenKey);
//   authApi.apiAuthTonproofGeneratePayloadPost();
// };
