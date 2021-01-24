import React, { useState, useContext, useReducer } from "react";
import styled from "styled-components/macro";
import logo from "../logo.svg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Context } from "../contexts/context";
import { ThemeContext } from "../contexts/themeContext";
import { ButtonContainer } from "./Button";
import WatchlistToggle from "./watchlistToggle";

const ItemCard = ({ item }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"; // Sätt i en global constants-fil?
  // const IMAGE_PATH = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
  const { id, title, overview, poster_path, release_date, vote_average, genre_ids, watchlisted } = item;
  const { handleDetails } = useContext(Context);
  const { theme } = useContext(ThemeContext);

  // const [linkTitle, setLinkTitle] = useState("");

  // const formatTitle = (title) => {
  //   const formattedTitle = title.replace(/ /g, "_");
  //   setLinkTitle(formattedTitle);
  // };
  // console.log(props.item.title);
  // console.log(title);

  return (
    <ItemContainer theme={theme} onClick={() => handleDetails(id)}>
      <div className="card">
        <Link to={`/movies/${title}`}>
          <div className="img-container">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
              alt={`${title} Poster`}
            />
          </div>
        </Link>

        <div className="card-footer">
          <div className="test">
            <h2>{title}</h2>
            <span className="rating">
              <img src={logo} />
              {vote_average}
            </span>
          </div>
          <div className="misc">
            <p>{release_date}</p>
            <WatchlistToggle item={item} />
          </div>
        </div>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 510px;

  .card {
    border-radius: 5px;
    transition: all 0.1s linear;
    border: 0.04rem solid rgba(0, 0, 0, 0);
    color: black;
  }

  .img-container {
    position: relative;
    overflow: hidden;
    height: 400px;
    width: 300px;
    border-radius: 5px 5px 0 0;

    .card-img {
      display: block;
      opacity: 95%;
      width: 100%;
      height: 100%;
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }

  .card-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 0 0 5px 5px;
    padding: 5px 10px;
    width: 300px;

    .test {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      height: 30px;
      overflow: hidden;
    }

    .rating {
      font-weight: 600;
      font-size: 1.2rem;
      width: 70px;
      text-align: right;
    }

    .misc {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .card:hover {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transform: translateY(-10px);

    img {
      opacity: 100%;
    }

    h2 {
      color: var(--main-orange);
    }
  }

  a {
    text-decoration: none;
    color: black;

    :hover {
      h2 {
        color: var(--main-orange);
      }
    }
  }
`;

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
  }),
};

ItemCard.defaultProps = {
  poster_path: "../images/the-witcher-3.jpg",
};

// ItemCard.defaultProps = {
//   poster_path:
//     "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",
// };

export default ItemCard;
