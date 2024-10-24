import ThemeSwitch from "components/themeSwitch/ThemeSwitch";
import "./layout.scss";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light")
  const handleChangeTheme = (newTheme: string) => {
    setTheme(newTheme)
  }
  return (
    <div id="appHeader" className="d-flex flex-row">
      <div className="col-2">
        <a href="/">
          <img src={"vite.svg"} alt="App logo"></img>
          <span className="ms-1">NdaFoods</span>
        </a>
      </div>
      <div className="col-8">
      </div>
      <div className="col-1">
        <ThemeSwitch currentTheme={theme} onChangeTheme={handleChangeTheme} sx={"ms-auto me-0"}/>
      </div>
    </div>
  );
};

export default Header;
