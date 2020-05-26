import React from "react";
import { Link } from "react-router-dom";
import Watchlist from "../components/Watchlist";

const Profile = () => {
  return (
    <div>
      <h1>This is the profile page</h1>
      <Link to="/profilename/watchlist">Go to watchlist</Link>
    </div>
  );
};

export default Profile;
