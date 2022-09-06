import { createContext, useContext, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Navbar';
import { ProfileProvider } from './context/ProfileContext';
import { RoutePages } from './routes/RoutePages';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./themes.js";
import { Outlet } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles/>
          <ProfileProvider>
            <Header theme={theme} toggler={themeToggler} />
            <Outlet/>
            <RoutePages/>
          </ProfileProvider>
          <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
