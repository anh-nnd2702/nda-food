import { THEME_ATTRIBUTE } from "constants/themeConstant";

export const setTheme = (theme: string) => {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  localStorage.setItem(THEME_ATTRIBUTE, theme);
};

export const getThemeFromStorage = () => {
  return localStorage.getItem(THEME_ATTRIBUTE);
};
