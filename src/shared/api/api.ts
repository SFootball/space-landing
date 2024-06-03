import { Configuration } from "./swagger";
import { UsersApi, PlayersApi, TasksApi, AuthApi } from "./swagger/api";

// const basePath = "http://localhost:5050";
const basePath = import.meta.env.VITE_API_URL;

const configuration = new Configuration({
  basePath,
});

// export const usersApi = new UsersApi();
export const usersApi = new UsersApi(configuration, basePath);

export const playersApi = new PlayersApi();

export const tasksApi = new TasksApi(configuration, basePath);

export const authApi = new AuthApi(configuration, basePath);
