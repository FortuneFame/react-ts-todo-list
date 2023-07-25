import { createContext, useContext } from "react";

export const themes = {
  light: {
    palette: {
      type: "light",
      primary: {
        main: "#235ADB", 
      },
      background: {
        default: "#fff", 
      },
      text: {
        primary: "#212121", 
      },
    },
  },
  dark: {
    palette: {
      type: "dark",
      primary: {
        main: "#202123", 
      },
      background: {
        default: "#353740", 
      },
      text: {
        primary: "#EBEBEB",
      },
    },
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export const useToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return toggleTheme;
};