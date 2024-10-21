import Header from "layout/Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Sidebar />
        <div className="main-content">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};

export default Layout;
