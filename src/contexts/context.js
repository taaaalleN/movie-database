import React, { useState, useEffect, useReducer } from "react";
// import { useFetch } from "../hooks/useFetch";
import { movieReducer } from "../reducers/movieReducer";
import { watchlistReducer } from "../reducers/watchlistReducer";

const Context = React.createContext();

const initialState = {
  data: [],
  // selectedItem: {},
  loading: true,
  error: "",
  watchlist: [],
};

const ContextProvider = ({ children }) => {
  const API_KEY = "04885294e995c2b055be7cf3da2429ed";
  const baseurl = `https://api.themoviedb.org/3`;
  const base_path = "/movie";
  // console.log(props.category);
  // const baseurl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  // const API_KEY2 = "facf1e25";
  // const fetchedData = useFetch(baseurl).results;
  // const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(JSON.parse(localStorage.getItem("selectedItem")) || {});
  // const [watchlist, dispatch] = useReducer(watchlistReducer, [], () => {
  //   const localWatchlist = localStorage.getItem("watchlist");
  //   return localWatchlist ? JSON.parse(localWatchlist) : [];
  // });
  const [items, dispatch] = useReducer(movieReducer, initialState);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("watchlist", JSON.stringify(watchlist));
  // }, [watchlist]);

  useEffect(() => {
    if (typeof selectedItem !== undefined) {
      localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
    }
  }, [selectedItem]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // The Movie Database API
  // useEffect(() => {
  //   fetch(baseurl)
  //     .then((res) => res.json())
  //     .then((data) => setItems(data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  console.log(items);

  // Kör getMovies vid uppstart
  // useEffect(() => {
  //   async function getMovies(category) {
  //     try {
  //       const res = await fetch(`${baseurl}${base_path}${category}/?language=en-US&api_key=${API_KEY}`);
  //       const data = await res.json();
  //       const dataWithWatchlist = await data.results.map((item) => ({ ...item, watchlisted: false }));
  //       dispatch({ type: "FETCH_SUCCESS", payload: dataWithWatchlist });
  //     } catch (error) {
  //       dispatch({ type: "FETCH_ERROR", payload: error });
  //     }
  //   }
  //   getMovies();
  // }, []);

  // Test att köra getMovies vid inladdning av sidan, där sidan kör getMovies istället för att context kör det vid start
  const getMovies = (category) => {
    // dispatch({ type: "CATEGORY_CHANGE", category });
    fetch(`${baseurl}${base_path}${category}/?language=en-US&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        // const dataWithWatchlist = data.results.map((item) => ({ ...item, watchlisted: false }));
        const dataWithWatchlist = formatMovieWatchlist(data.results);
        dispatch({ type: "FETCH_SUCCESS", payload: dataWithWatchlist });
      })
      .catch((error) => dispatch({ type: "FETCH_ERROR", payload: error }));
    //   const data = await res.json();
    //   const dataWithWatchlist = await data.results.map((item) => ({ ...item, watchlisted: false }));
    //   dispatch({ type: "FETCH_SUCCESS", payload: dataWithWatchlist });
    // } catch (error) {
    //   dispatch({ type: "FETCH_ERROR", payload: error });
    // }
  };

  const formatMovieWatchlist = (movies) => {
    const moviesWithWatchlist = movies.map((item) => ({ ...item, watchlisted: false }));
    return moviesWithWatchlist;
  };

  // console.log(items);

  // const appendWatchlisted = () => {
  //   let newArr = [...items];
  //   const alteredItems = newArr.map((movie) => ({ ...movie, watchlisted: false }));
  //   setItems(alteredItems);
  //   console.log(items);
  // };

  // OMDB API
  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setItems(data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleDetails = (id) => {
    const wantedItem = items.data.find((item) => item.id === id);
    setSelectedItem(wantedItem);
  };

  // const [watchlisted, setWatchlisted] = useState(false);
  // const toggleWatchlist = (item) => {};

  // const addToWatchlist = (movie) => {
  //   if (!movie) return;
  //   dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  // };

  return (
    <Context.Provider
      value={{
        items,
        selectedItem,
        API_KEY,
        handleDetails,
        dispatch,
        getMovies,
        formatMovieWatchlist,
        favorites,
        setFavorites,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
