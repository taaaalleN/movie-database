import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import ItemDetails from "./components/ItemDetails";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Watchlist from "./components/Watchlist";

import { POPULAR, TOP_RATED, UPCOMING } from "./api";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div id="homepage">
            <h1>Home Page</h1>
            <Search />
          </div>
        </Route>
        {/* <Route exact path="/discover">
          <Page title={"Discover"} category={DISCOVER} />
        </Route> */}
        <Route exact path="/popular">
          <Page title={"Popular"} category={POPULAR} />
        </Route>
        <Route exact path="/toprated">
          <Page title={"Top Rated"} category={TOP_RATED} />
        </Route>
        <Route exact path="/upcoming">
          <Page title={"Upcoming"} category={UPCOMING} />
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
