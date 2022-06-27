import React, { useContext } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Page from "./components/Page";
import ItemDetails from "./components/ItemDetails";
import Profile from "./components/Profile";
// import Watchlist from "./components/Watchlist";
import Home from "./pages/Home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Footer from "./containers/footer";

import * as ROUTES from "./constants/routes";
import { POPULAR, TOP_RATED, UPCOMING, DISCOVER } from "./constants/constants";

import { ThemeContext } from "./contexts/themeContext";
import useAuthListener from "./hooks/useAuthListener";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { Loading } from "./components/";
import { Context } from "./contexts/context";
import { AiFillExclamationCircle } from "react-icons/ai";

function App() {
  const { theme } = useContext(ThemeContext);
  const { user } = useAuthListener();
  const { loading } = useContext(Context);

  return (
    <>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      <Nav user={user} />
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home header={"Home"} />
        </Route>
        <Route exact path={ROUTES.DISCOVER}>
          <Page title={"Discover"} category={DISCOVER} />
        </Route>
        <Route exact path={ROUTES.POPULAR}>
          <Page title={"Popular"} category={POPULAR} />
        </Route>
        <Route exact path={ROUTES.TOPRATED}>
          <Page title={"Top Rated"} category={TOP_RATED} />
        </Route>
        <Route exact path={ROUTES.UPCOMING}>
          <Page title={"Upcoming"} category={UPCOMING} />
        </Route>
        <Route path="/games">
          <Page />
        </Route>
        <IsUserRedirect user={user} loggedInPath={ROUTES.PROFILE} exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.PROFILE} exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path={ROUTES.PROFILE}>
          <Profile user={user} />
        </ProtectedRoute>
        {/* <Route path="/profilename/watchlist">
          <Watchlist />
        </Route> */}
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
