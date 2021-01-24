import React, { useContext } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Page from "./components/Page";
import ItemDetails from "./components/ItemDetails";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Watchlist from "./components/Watchlist";
import Home from "./pages/Home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Footer from "./containers/footer";

import * as ROUTES from "./constants/routes";
import { POPULAR, TOP_RATED, UPCOMING, DISCOVER } from "./constants/constants";

import { ThemeContext } from "./contexts/themeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home header={"Home"} />
        </Route>
        <Route exact path="/discover">
          <Page title={"Discover"} category={DISCOVER} />
        </Route>
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
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path="/profilename/watchlist">
          <Watchlist />
        </Route>
        <Route path="/movies/:movieId">
          <ItemDetails />
        </Route>
        {/* <Route path="?s=:query">
          <Page title={"Search results for..."} />
        </Route> */}
      </Switch>
      <Footer theme={theme} />
    </>
  );
}

export default App;
