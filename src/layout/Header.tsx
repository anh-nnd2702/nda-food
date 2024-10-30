import ThemeSwitch from "components/themeSwitch/ThemeSwitch";
import { GoogleLogin } from "@react-oauth/google";
import "./layout.scss";
import { useEffect, useState } from "react";

const Header = () => {
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
      <div className="col-2">
        <a href="/">
          <img src={"vite.svg"} alt="App logo"></img>
          <span className="ms-1">NdaFoods</span>
        </a>
      </div>
      <div className="col-8"></div>
      <div className="col-1">
        <ThemeSwitch
          currentTheme={theme}
          onChangeTheme={handleChangeTheme}
          sx={"ms-auto me-0"}
        />
      </div>
      <div className="col-2">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("failed");
          }}
        ></GoogleLogin>
      </div>
    </div>
  );
};

export default Header;
