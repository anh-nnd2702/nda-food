import ThemeSwitch from "components/themeSwitch/ThemeSwitch";
// import { GoogleLogin } from "@react-oauth/google";
import "./layout.scss";
import appLogo from "assets/vite.svg";
import { useEffect, useState } from "react";

type HeaderPropType = {
  onClickMenu: () => void;
  isShowMenu: boolean;
};

const Header = (props: HeaderPropType) => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = (newTheme: string) => {
    document.documentElement.setAttribute("nda-food-color-scheme", newTheme);
    localStorage.setItem("nf-theme", newTheme);
    setTheme(newTheme);
  };
  useEffect(() => {
    const currentTheme = localStorage.getItem("nf-theme");
    if (currentTheme && currentTheme === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("nda-food-color-scheme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("nda-food-color-scheme", "light");
    }
  }, []);

  return (
    <div id="appHeader" className="d-flex flex-row">
      <div className="col-lg-2 text-end px-2">
        <button onClick={props.onClickMenu} id="menuBtn">
          {props.isShowMenu ? (
            <i className="fa-solid fa-close"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>
      <div className="col-lg-1 col-md-2 ps-0">
        <a href="/">
          <img src={appLogo} alt="App logo"></img>
          <span className="ms-1">NdaFoods</span>
        </a>
      </div>
      <div className="col-lg-6"></div>
      <div className="col-lg-1 text-end">
        <ThemeSwitch
          currentTheme={theme}
          onChangeTheme={handleChangeTheme}
          sx={"ms-auto me-2"}
        />
      </div>
    </div>
  );
};

export default Header;
