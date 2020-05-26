import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import ItemDetails from "./components/ItemDetails";
import NavbarTest from "./components/NavbarTest";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarTest />
      <Switch>
        <Route exact path="/">
          <div id="homepage">
            <h1>Home Page</h1>
            <Search />
          </div>
        </Route>
        <Route exact path="/movies">
          <Page title={"Movies"} />
        </Route>
        <Route path="/games">
          <Page />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/profilename/watchlist">
          <Watchlist />
        </Route>
        <Route path="/movies/:movieId">
          <ItemDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
