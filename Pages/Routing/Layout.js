import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};
export default Layout;
