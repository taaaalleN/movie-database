import React, { useContext } from "react";
import { Context } from "../contexts/context";

const Watchlist = () => {
  const { watchlist } = useContext(Context);
  return (
    <div>
      {watchlist.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};

export default Watchlist;
