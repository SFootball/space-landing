import { Outlet } from "react-router-dom";
import { Header } from "../widgets/Header/Header";
import { Footer } from "../widgets/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
