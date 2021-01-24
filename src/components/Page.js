import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/macro";

import ItemCard from "./ItemCard";
import { Context } from "../contexts/context";
import { ThemeContext } from "../contexts/themeContext";

// Test för att fixa categories/getMovies
import { useLocation } from "react-router-dom";

const Page = ({ title, category }) => {
  // const API_KEY = "04885294e995c2b055be7cf3da2429ed";
  // const [items, setItems] = useState([]);
  const { items, getMovies } = useContext(Context);
  const { theme } = useContext(ThemeContext);

  let location = useLocation();

  const [backdrop, setBackdrop] = useState("");

  // console.log(items);
  // console.log(items.data);
  // console.log(items.data.title);
  // console.log(category);
  // console.log(`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${items.data[0].poster_path}`);

  // Varje gång en film laddas färdigt uppdateras komponenten
  // Alltså uppdateras den 20 ggr per refresh eftersom det är 20 filmer
  useEffect(() => {
    getMovies(category);
    items ? console.log("Items exist") : console.log("Items don't exist");
  }, [location]); // Kör getMovies när url:en ändras, bättre men ändå för många uppdateringar tror jag

  const content = () => {
    return (
      <div>
        <div className="backdrop-container">
          <img
            className="backdrop-image"
            src={items.data.length > 0 ? `https://image.tmdb.org/t/p/original${items.data[0].backdrop_path}` : "/asdj"}
            alt="Hero image"
          />
          <div className="backdrop-blur"></div>
        </div>
        <div className="main-content">
          <h1>{title}</h1>
          <div className="row">
            {items.data.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageWrapper theme={theme} backdrop={backdrop}>
      <div className="container">{content()}</div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  // height för att hela sidan ska bli färgad och inte bara ett litet block
  // height: 100vh;
  // background-color: ${(props) => (props.theme === "dark" ? "#282c34" : "#f0f3bd")};

  .backdrop-container {
    margin: 0 auto;
    width: 80%;
    height: 800px;
    box-shadow: 0 0 8px 8px #141e30 inset;
    // box-shadow: ${(props) => `0 0 8px 8px ${props.theme.background} inset`};
    // background-image: ${(props) => `url(https://image.tmdb.org/t/p/original${props.backdrop})`};

    @media (max-width: 1268px) {
      width: 100%;
      height: 550px;
    }

    .backdrop-image {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 8px 8px #282c34 inset;
    }
  }

  .main-content {
    margin-top: -100px;

    @media (max-width: 1268px) {
      margin-top: -350px;
    }
  }

  h1 {
    color: ${(props) => (props.theme === "dark" ? "#ffff" : "black")};
    text-align: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > * {
      // width: 300px;
    }

    > div {
      margin: 1.5em 1.25em;
    }
  }
`;

export default Page;
