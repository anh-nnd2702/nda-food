import Header from "layout/Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { useState } from "react";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClickMenu = () => {
    setShowMenu((curState) => !curState);
  };

  return (
    <div className="main-layout">
      <Header onClickMenu={handleClickMenu} isShowMenu={showMenu} />
      <main>
        <Sidebar isShowMenu={showMenu} />
        <div className="main-content">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};

export default Layout;
