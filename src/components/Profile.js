import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Watchlist from "../components/Watchlist";

import { Context } from "../contexts/context";
import ItemCard from "./ItemCard";

const Profile = () => {
  const { favorites } = useContext(Context);
  return (
    <Container>
      <h1>This is the profile page</h1>
      <Link to="/profilename/watchlist">Go to watchlist</Link>
      <div className="favorites-container">
        <p>
          Favorites <span>{favorites.length}</span>
        </p>
        <div className="favorites">
          {favorites.map((favorite) => (
            <ItemCard key={favorite.id} item={favorite} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justiy-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    margin-bottom: 1em;
  }

  .favorites-container {
    margin-top: 2em;
    width: 100%;
    text-align: center;
  }

  .favorites {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > * {
      margin: 0 1em;
    }
  }
`;
