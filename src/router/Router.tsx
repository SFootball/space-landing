import {
  // Route,
  createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import MainPage from "../pages/main/Main";
import About from "../pages/about/About";
import Roadmap from "../pages/roadmap/Roadmap";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
]);
