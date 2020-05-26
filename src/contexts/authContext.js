import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
