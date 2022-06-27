import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider } from "./contexts/context";
import { ThemeContextProvider } from "./contexts/themeContext";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./contexts/firebase";

ReactDOM.render(
  <ThemeContextProvider>
    <FirebaseContext.Provider value={{ firebase }}>
      <ContextProvider>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </ContextProvider>
    </FirebaseContext.Provider>
  </ThemeContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
