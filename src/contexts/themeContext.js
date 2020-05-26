import React, { useState, useEffect } from "react";

// export const themes = {
//   dark: {
//     color: "white",
//     background: "black",
//     bootstrapNav: "dark",
//   },
//   light: {
//     color: "black",
//     background: "white",
//     bootstrapNav: "light",
//   },
// };

const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const color = theme === "dark" ? "#FFF" : "#333";
  const backgroundColor = theme === "dark" ? "#282c34" : "#f0f3bd";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContextProvider, ThemeContext };
