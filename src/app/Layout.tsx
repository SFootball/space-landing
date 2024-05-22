import { Outlet } from "react-router-dom";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
