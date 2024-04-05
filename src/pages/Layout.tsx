import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
