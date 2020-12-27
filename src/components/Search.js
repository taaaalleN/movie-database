import React, { useState, useContext } from "react";
import styled from "styled-components";

import { Context } from "../contexts/context";

const Search = () => {
  const [query, setQuery] = useState("");
  const { setItems, API_KEY, dispatch, formatMovieWatchlist } = useContext(Context);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // const searchMovies = (e) => {
  //   e.preventDefault();
  //   if (!query) return;
  //   setItems([]);
  //   formatQuery(query);
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => setItems(data.results))
  //     .catch((err) => console.log(err));
  //   setQuery("");
  //   // console.log("submitted");
  //   // console.log(query, items);
  // };

  // Async version
  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;
    dispatch({ type: "RESET_MOVIES" });
    // setItems([]);
    formatQuery(query);
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await res.json();
      // setItems(data.results);
      const dataWithWatchlist = formatMovieWatchlist(data.results);
      dispatch({ type: "FETCH_SUCCESS", payload: dataWithWatchlist });
    } catch (error) {
      // console.log(error);
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
    setQuery("");
  };

  const formatQuery = (stringToFormat) => {
    const formattedQuery = stringToFormat.replace(/ /g, "+");
    // console.log(formattedQuery);
    return formattedQuery;
  };

  return (
    <SearchWrapper>
      <form className="search__form" onSubmit={searchMovies}>
        <div className="search__wrapper">
          <input
            className="search__input"
            type="text"
            name="query"
            placeholder="Search for a movie..."
            value={query}
            onChange={handleChange}
          />
          <button className="search__btn">Search</button>
        </div>
      </form>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  // Utkommenterat är en annan lösning för knappen inuti sökinputen
  // Wrapper flex, input flex-grow - tror det är allt

  // .search__form {
  //   // width: 100%;
  //   // display: flex;
  //   // justify-content: center;
  // }

  .search__wrapper {
    position: relative;
    border-radius: 5px;

    // width: 50%;
    // display: flex;
  }

  .search__input {
    width: 100%;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    padding: 5px;
    // padding: 7px;
    // flex-grow: 2;

    ::placeholder {
      font-style: italic;
    }

    :focus {
      box-shadow: 0 0 10px #ff5733;
    }
  }

  .search__btn {
    position: absolute;
    right: 0;
    top: 0;

    padding: 0.4em 1.1em;
    border: none;
    border-radius: 5px;
    transition: background-color 250ms ease-in-out;
    // background-color: rgba(150, 150, 150, 0.8);
    background-color: rgba(0, 0, 0, 0.4);

    :hover {
      background-color: var(--main-orange);
      color: white;
    }
  }
`;

export default Search;
