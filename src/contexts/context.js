import React, { useState, useEffect, useReducer } from "react";
import { watchlistReducer } from "../reducers/watchlistReducer";
// import { useFetch } from "../hooks/useFetch";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const API_KEY = "04885294e995c2b055be7cf3da2429ed";
  const baseurl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  // const API_KEY2 = "facf1e25";
  // const fetchedData = useFetch(baseurl).results;
  // const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(JSON.parse(localStorage.getItem("selectedItem")) || {});
  const [watchlist, dispatch] = useReducer(watchlistReducer, [], () => {
    const localWatchlist = localStorage.getItem("watchlist");
    return localWatchlist ? JSON.parse(localWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
  }, [selectedItem]);

  // The Movie Database API
  // useEffect(() => {
  //   fetch(baseurl)
  //     .then((res) => res.json())
  //     .then((data) => setItems(data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(items);

  useEffect(async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const data = await res.json();
      setItems(data.results);
      // appendWatchlisted();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(items);

  const appendWatchlisted = () => {
    let newArr = [...items];
    const alteredItems = newArr.map((movie) => ({ ...movie, watchlisted: false }));
    setItems(alteredItems);
    console.log(items);
  };

  // const testWatchlist = () => {
  //   console.log("Stuff happens");
  //   if (!items) return;
  //   items.map((movie) => setItems({ test: "stuff" }));
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
    const wantedItem = items.find((item) => item.id === id);
    setSelectedItem(wantedItem);
  };

  return (
    <Context.Provider value={{ items, setItems, selectedItem, API_KEY, handleDetails, watchlist, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
