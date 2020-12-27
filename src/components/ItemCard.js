import React, { useState, useContext, useReducer } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Context } from "../contexts/context";
import { ThemeContext } from "../contexts/themeContext";
import { ButtonContainer } from "./Button";

const ItemCard = ({ item }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"; // Sätt i en global constans-fil?
  // const IMAGE_PATH = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
  const { id, title, overview, poster_path, release_date, vote_average, genre_ids } = item;
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
    <ItemContainer className="col-4 mx-auto col-md-3 col-lg-3 my-3" theme={theme}>
      <Link to={`/movies/${title}`}>
        <div className="card" onClick={() => handleDetails(id)}>
          <div className="img-container">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
              alt={`${title} Poster`}
              className="card-img-top"
            />
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <h2>{title}</h2>
              <span>
                <img src={logo} />
                {vote_average}
              </span>
            </div>
            <p>{release_date}</p>
            {/* <p>{overview}</p> */}
          </div>
        </div>
      </Link>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  .card {
    transition: all 0.1s linear;
  }

  .card p {
    margin: 0;
    margin-top: -10px;
    color: rgba(0, 0, 0, 0.6);
  }

  .card-footer h2 {
    font-size: 1.2rem;
    font-weight: 600;
    // height: 50px;
  }

  .img-container {
    position: relative;
    overflow: hidden;
    background: rgba(0, 0, 0, 0);

    img {
      opacity: 95%;
    }
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      // box-shadow: 0 10px 8px #ff5733;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      transform: translateY(-10px);
      transition-delay: 0.1s; // För att delaya hover-translaten, men måste göras annorlunda - detta är en skitlösning
    }

    img {
      opacity: 100%;
    }
  }

  a {
    text-decoration: none;
    color: black;

    :hover {
      color: var(--main-orange);
    }
  }

  span {
    font-weight: 600;
    font-size: 1.2rem;

    img {
      margin-top: -6px;
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
  poster_path:
    "https://https://www.themoviedb.org/https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1280px-Question_Mark.svg.png",
};

export default ItemCard;
