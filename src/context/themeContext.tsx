import React, { ComponentProps, useState, useContext, createContext } from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void
}

const INITIAL_STATE = {
  theme: "light",
  toggleTheme: () => { },
} as ThemeContextType

const themeContext = createContext<ThemeContextType>(INITIAL_STATE);

export const ThemeContextProvider: React.FC<ComponentProps<"div">> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  const value = {
    theme,
    toggleTheme
  } as ThemeContextType

  return (
    <themeContext.Provider value={value}>
      {children}
    </themeContext.Provider>
  )
}

export const useThemeContext = () => useContext(themeContext);
