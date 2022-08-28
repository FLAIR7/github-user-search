import React, { useContext, useState } from "react";

const ThemesContext = React.createContext();

export function useThemes(){
    return useContext(ThemesContext);
}

export function ThemesProvider({children}) {

    const [theme, setTheme] = useState("light");

    const togglerTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    const getTheme = () => {
        return theme;
    }

    const setThemeValue = e => {
        setTheme(e);
    }
    return (
        <ThemesContext.Provider value={{togglerTheme, getTheme, setThemeValue}}>
            {children}
        </ThemesContext.Provider>
    )
}