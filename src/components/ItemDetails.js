import React, { useContext, useEffect, useReducer } from "react";
import styled from "styled-components/macro";
import { Context } from "../contexts/context";
import { ThemeContext } from "../contexts/themeContext";
import logo from "../logo.svg";
import { ButtonContainer } from "../components/Button";
// import { watchlistReducer } from "../reducers/watchlistReducer";
import WatchlistToggle from "./watchlistToggle";

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

  // console.log("Selected item is: ", selectedItem);
  // console.log("Watchlisted: ", selectedItem.watchlisted);
  // const AddRemove = (selectedItem) => {
  //   if (selectedItem.watchlisted) {
  //     dispatch({ type: "REMOVE_FROM_WATCHLIST", selectedItem.id });
  //   }
  //   dispatch({ type: "ADD_TO_WATCHLIST", selectedItem });

  //   // return selectedItem.watchlist ?  "ADD_TO_WATCHLIST" : "REMOVE_FROM_WATCHLIST";
  // };

  // console.log(selectedItem);
  // console.log(selectedItem.watchlisted);
  console.log("items: ", items);
  // console.log(items.watchlist.indexOf(selectedItem));

  return (
    <DetailsContainer>
      <DetailsWrapper theme={theme}>
        <section className="details-inner">
          <div className="img-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${selectedItem.poster_path}`}
              alt={`${selectedItem.title} Poster`}
            />
          </div>
          <div className="info">
            <div className="title-row">
              <h1>{selectedItem.title}</h1>
              <WatchlistToggle item={selectedItem} />
            </div>
            <div id="description">
              <h5 className="info-headline">Synopsis</h5>
              <p class="synopsis">{selectedItem.overview}</p>
            </div>
            <div className="misc">
              <p className="info-headline">
                Release Date: <span>{selectedItem.release_date}</span>
              </p>
              <p>
                Genre ids:
                <span> {selectedItem.genre_ids}</span>
              </p>
              <span className="rating">
                <img src={logo} />
                {selectedItem.vote_average}
              </span>
              {/* <span>{selectedItem.runtime}</span> */}
            </div>
            {/* <Button theme={theme} onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", payload: selectedItem })}>
            {items.watchlist.includes(selectedItem) ? "Remove from watchlist" : "Add to watchlist"}
          </Button> */}
            {/* <Button theme={theme} onClick={() => AddRemove(selectedItem)}>
            {items.watchlist.includes(selectedItem) ? "Remove from watchlist" : "Add to watchlist"}
          </Button> */}

            {/* General idea = if indexOf = -1 it doesn't exists in array and then Add to watchlist should display */}
            {/* {items.watchlist.indexOf(selectedItem) !== -1 ? (
              <Button
                theme={theme}
                onClick={() => dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: { selectedItem } })}
              >
                Remove from watchlist
              </Button>
            ) : (
              <Button theme={theme} onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", payload: { selectedItem } })}>
                Add to watchlist
              </Button>
            )} */}
          </div>
        </section>
      </DetailsWrapper>
    </DetailsContainer>
  );
};

const Button = styled(ButtonContainer)`
  display: inline-block;
  height: 50px;
  // width: auto;
  position: absolute;
  top: 0;
  right: 0;
  // align-self: end;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  height: 100vh;
`;

const DetailsWrapper = styled.div`
  color: #333;
  position: relative;
  top: -100px;
  display: flex;
  justify-content: center;

  .details-inner {
    position: relative;
    background-color: #ffff;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0, 6);
    padding: 20px 20px;
    display: flex;
    width: 50%;
    max-width: 1300px;
  }

  .img-wrapper {
    display: block;
    width: 300px;
    height: 450px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

    img {
      display: block;
      width: auto;
      height: 100%;
      // min-width: 100%;
      // min-height: 100%;
      border-width: 0px;
      outline: none;
      min-width: 100%;
    }
  }

  .title-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // max-width: 600px;
    padding-left: 20px;
    flex: 1;

    .info-headline {
      font-size: 1.2em;
      font-weight: 600;
    }

    .rating {
      font-size: 1.5em;

      img {
        // width: auto;
        // height: 1em;
        height: 20px;
        width: 20px;
        vertical-align: baseline;
      }
    }

    span {
      padding-right: 10px;
    }

    .synopsis {
      line-height: 1.4;
    }
  }

  .misc {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #description {
    // padding-top: 230px;
  }
`;

export default ItemDetails;
