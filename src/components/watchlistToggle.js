import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Context } from "../contexts/context";
import { watchlistReducer } from "../reducers/watchlistReducer";

const WatchlistToggle = ({ item }) => {
  const { favorites, setFavorites } = useContext(Context);

  //   const [watchlisted, setWatchlisted] = useState(false);

  //   const toggleWatchlist = () => {
  //     if (watchlisted) {
  //       setWatchlisted(false);
  //       console.log("Watchlisted " + item.title);
  //     } else {
  //       setWatchlisted(true);
  //       console.log("Removed " + item.title);
  //     }
  //   };
  // console.log("favorites: " + typeof favorites);

  const toggleWatchlist = (item) => {
    if (favorites.some((movie) => movie.id === item.id)) {
      const newFavorites = favorites.filter((movie) => movie.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return !favorites.some((movie) => movie.id === item.id) ? (
    <SvgContainer onClick={() => toggleWatchlist(item)}>
      <AiFillEye />
    </SvgContainer>
  ) : (
    <SvgContainer onClick={() => toggleWatchlist(item)}>
      <AiFillEyeInvisible />
    </SvgContainer>
  );
};

export default WatchlistToggle;

const SvgContainer = styled.div`
  cursor: pointer;
  transition: color 250ms ease-in-out;
  max-width: 32px;
  max-height: 32px;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: orange;
  }
`;
