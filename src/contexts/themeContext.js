import React, { useState, useEffect, createContext } from "react";
const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "dark" ? "#FFF" : "#333";
  // const backgroundColor = theme === "dark" ? "#282c34" : "#f0f3bd";
  const background = theme === "dark" ? "linear-gradient(#141e30, #243b55)" : "#f0f3bd";

  document.body.style.color = color;
  document.body.style.background = background;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContextProvider, ThemeContext };
