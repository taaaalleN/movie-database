import React, { useContext, useEffect, useReducer } from "react";
import styled from "styled-components";
import { Context } from "../contexts/context";
import { ThemeContext } from "../contexts/themeContext";
import logo from "../logo.svg";
import { ButtonContainer } from "../components/Button";
// import { watchlistReducer } from "../reducers/watchlistReducer";

const ItemDetails = () => {
  const { selectedItem, dispatch, items, setItems } = useContext(Context);
  const { theme } = useContext(ThemeContext);
  // const params = useParams();
  // console.log(params);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"; // Sätt i en global constants-fil?
  // const [theSelectedItem, dispatch] = useReducer(watchlistReducer, selectedItem);

  // const API_KEY = "04885294e995c2b055be7cf3da2429ed";
  // const URL = `https://api.themoviedb.org/${movieId}/movie/343611?api_key=`;

  // console.log(selectedItem);
  // console.log(selectedItem.genre_ids);
  // console.log(dispatch);
  // console.log(watchlist);

  // console.log(selectedItem);
  // console.log(selectedItem.watchlisted);
  // console.log(items);
  // useEffect(() => {
  //   // items.map((movie) => setItems([...items, { ...movie, watchlisted: false }]));
  //   let newArr = [...items];
  //   const alteredMovies = newArr.map((movie) => ({ ...movie, watchlisted: false }));
  //   // setItems(alteredMovies);
  //   setItems(alteredMovies);
  // }, []);
  // console.log(items.watchlist);

  return (
    <DetailsWrapper theme={theme}>
      <div className="details container">
        <section className="inner">
          <div className="img-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${selectedItem.poster_path}`}
              alt={`${selectedItem.title} Poster`}
            />
          </div>
          <div className="info">
            <h2>{selectedItem.title}</h2>
            <div className="group">
              <span>Release Date: {selectedItem.release_date}</span>
              <span>
                <img src={logo} />
                {selectedItem.vote_average}
              </span>
              <span>{selectedItem.genre_ids}</span>
              {/* <span>{selectedItem.runtime}</span> */}
            </div>
            <div id="description">
              <h5 style={{ fontWeight: "600" }}>Synopsis</h5>
              <p>{selectedItem.overview}</p>
            </div>
          </div>
          {/* <ButtonContainer
            theme={theme}
            onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", movie: { selectedItem } })}
          >
            {selectedItem.watchlisted ? "Remove from watchlist" : "Add to watchlist"}
          </ButtonContainer> */}
          <ButtonContainer theme={theme} onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", payload: selectedItem })}>
            {items.watchlist.includes(selectedItem) ? "Remove from watchlist" : "Add to watchlist"}
          </ButtonContainer>
        </section>
      </div>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  color: #333;

  h2,
  p {
    margin: 0;
    padding: 0;
  }

  .details {
    position: relative;
    top: 50px;

    background-color: #ffff;

    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0, 6);
  }

  .inner {
    padding: 20px 5px;
    display: flex;
  }

  .img-wrapper {
    // width: 90%;
    // height: 90%;
    display: block;
    min-width: 300px;
    width: 300px;
    height: 450px;
    // position: relative;
    // top: 0;
    // left: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

    img {
      display: block;
      width: 100%;
      min-width: 100%;
      height: 100%;
      min-height: 100%;
      border-width: 0px;
      outline: none;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding-left: 20px;

    span {
      padding-right: 10px;
    }
  }

  #description {
    // padding-top: 230px;
  }
`;

export default ItemDetails;
