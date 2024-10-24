import "./themeSwitch.scss";

type ThemeSwitchProps = {
  currentTheme: string,
  onChangeTheme: (theme: string) => void,
  sx: string 
}
const ThemeSwitch = ({currentTheme, onChangeTheme, sx} : ThemeSwitchProps) => {
  
  return (
    <div className={`theme-switch switch--${currentTheme} ${sx}`}>
      <button 
        onClick={() => onChangeTheme(currentTheme === "dark" ? "light" : "dark")} 
        className={`theme-button--${currentTheme}`}
      >
        <i className={`fa-solid fa-${currentTheme==="dark" ? "moon" : "sun"}`}></i>
      </button>
    </div>
  )
}

export default ThemeSwitch;