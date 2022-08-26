import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Navbar';
import { ProfileProvider, useProfile } from './context/ProfileContext';
import { RoutePages } from './routes/RoutePages';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./themes.js";

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
            <Header/>
            <RoutePages/>
          </ProfileProvider>
          <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
