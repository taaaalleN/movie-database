import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
import { BsSearch } from "react-icons/bs";

import { Context } from "../contexts/context";

const Search = ({ width = "300px" }) => {
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

  // console.log(width);

  return (
    <SearchWrapper width={width}>
      <form className="search__form" onSubmit={searchMovies}>
        <input
          className="search__input"
          type="text"
          name="query"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleChange}
        />
        <button className="search__btn">
          {width > "300px" ? <span className="search__text">Search</span> : ""}
          <span className="svg-container">
            <BsSearch />
          </span>
        </button>
        {/* <img id="search-icon" src={MagnifyingGlassSVG} alt="Magnifying Glass" /> */}
      </form>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width};
  margin: 0 auto;

  .search__input {
    width: 100%;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    padding: 8px;

    ::placeholder {
      font-style: italic;
    }

    :focus {
      // box-shadow: 0 0 10px #ff5733;
      outline: 2px solid var(--main-orange);
      // outline: none;
    }
  }

  .search__btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 20%;
    color: white;

    padding: 0.4em 1.1em;
    border: none;
    border-radius: 0 5px 5px 0;
    transition: 250ms ease-in-out;
    // background-color: rgba(150, 150, 150, 0.8);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--main-orange);
      cursor: pointer;
    }

    .search__text {
      margin-right: 0.4rem;
    }

    .svg-container {
      display: inline-flex;
      align-items: center;

      & > svg {
        width: 1.25em;
        height: 1.25em;
        // margin-left: 0.4rem;
      }
    }

    // &:active {
    //   transform: translateY(2px);
    // }
  }
`;

export default Search;
