import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Main } from "../../pages/main/Main";
import { About } from "../../pages/about/About";
import { Roadmap } from "../../pages/roadmap/Roadmap";
import { Layout } from "../Layout";
import AccountInfo from "../../pages/account-info/AccountInfo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/account-info" element={<AccountInfo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);
