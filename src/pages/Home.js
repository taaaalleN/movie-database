import React, { useContext, useEffect } from "react";
import styled from "styled-components/macro";
import { Context } from "../contexts/context";
import Search from "../components/Search";
import ItemCard from "../components/ItemCard";

const Home = ({ header }) => {
  const { items } = useContext(Context);

  const content = () => {
    return (
      <div>
        {/* <div className="backdrop-container">
          <img
            className="backdrop-image"
            src={items.data.length > 0 ? `https://image.tmdb.org/t/p/original${items.data[0].backdrop_path}` : "/asdj"}
            alt="Hero image"
          />
          <div className="backdrop-blur"></div>
        </div> */}
        <div className="main-content">
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
    <Container>
      <h1>{header}</h1>
      <Search width={"500px"} />
      {items.data.length > 0 ? content() : <p>Make a search</p>}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;

  > * {
    margin: 0.5em 0;
  }

  .main-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > * {
      width: 300px;
    }

    > div {
      margin: 1.5em 1.25em;
    }
  }
`;
