import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "../../pages/main/Main";
import About from "../../pages/about/About";
import Roadmap from "../../pages/roadmap/Roadmap";
import Layout from "../Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Route>
  )
);
