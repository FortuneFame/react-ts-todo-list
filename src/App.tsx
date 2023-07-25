import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import myStore from "./store";
import Header from "./components/Header";
import { ThemeContext, themes } from "./Context/themeContext";
import Footer from "./components/Footer";


const localTheme = JSON.parse(window.localStorage.getItem('appTheme') || '{}');

const App: React.FC = () => {
  const [theme, setTheme] = useState(localTheme.palette ? localTheme : themes.light);

  const toggleTheme = () => {
    const newTheme = theme.palette.type === "light" ? themes.dark : themes.light;
    window.localStorage.setItem('appTheme', JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('appTheme');
    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    }
  }, []);

  return (
 <Provider store={myStore}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={createTheme(theme)}> 
          <CssBaseline />
          <Header />
          <main style={{ marginTop: '70px', marginBottom:'70px'}}> 
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
