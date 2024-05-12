import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "../pages/main/Main";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path={"/"} element={<MainPage />} />)
);
