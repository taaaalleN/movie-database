import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { Context } from "../contexts/context";
import ItemCard from "./ItemCard";

import useFavorites from "../hooks/useFavorites";
import { useGetFavorites } from "../hooks/useAuthListener";
import { AiOutlineBorderBottom } from "react-icons/ai";

const Profile = ({ user }) => {
  // const { favorites } = useContext(Context);

  //   return user.displayName ? (
  //     <Container>
  //       <h1>This is the profile page</h1>
  //       <Link to="/profilename/watchlist">Go to watchlist</Link>
  //       <div className="favorites-container">
  //         <p>
  //           Favorites <span>{favorites.length}</span>
  //         </p>
  //         <div className="favorites">
  //           {favorites.map((favorite) => (
  //             <ItemCard key={favorite.id} item={favorite} />
  //           ))}
  //         </div>
  //       </div>
  //     </Container>
  //   ) : (
  //     <>
  //       <p>No user</p>
  //       <p>{user}</p>
  //     </>
  //   );
  // console.log("user in profile: ", user);
  const favorites = useGetFavorites(user);
  console.log("Favorites in profile: ", favorites);

  return (
    <Container>
      <h1>This is the profile page</h1>
      <p style={{ marginTop: "20px" }}>{user.displayName}</p>
      <p style={{ marginBottom: "20px" }}>{user.email}</p>
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
