import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import ItemCard from "./ItemCard";
import Search from "./Search";
import { Context } from "../contexts/context";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/themeContext";

// Test för att fixa categories/getMovies
import { useLocation } from "react-router-dom";

const Page = ({ title, category }) => {
  // const API_KEY = "04885294e995c2b055be7cf3da2429ed";
  // const [items, setItems] = useState([]);
  const { items, getMovies } = useContext(Context);
  const { isAuthenticated } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  let location = useLocation();

  console.log(items);
  // console.log(items.data);
  // console.log(items.data.title);
  // console.log(category);

  // Varje gång en film laddas färdigt uppdateras komponenten
  // Alltså uppdateras den 20 ggr per refresh eftersom det är 20 filmer
  useEffect(() => {
    getMovies(category);
  }, [location]); // Kör getMovies när url:en ändras, bättre men ändå för många uppdateringar tror jag

  const content = () => {
    if (isAuthenticated) {
      return (
        <div>
          <h1>{title}</h1>
          {/* <Search /> */}
          <div className="row">
            {items.data.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    } else {
      return <h1>Log in to see the content</h1>;
    }
  };

  return (
    <PageWrapper theme={theme}>
      <div className="py-5">
        <div className="container">{content()}</div>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  // height för att hela sidan ska bli färgad och inte bara ett litet block
  // height: 100vh;
  // background-color: ${(props) => (props.theme === "dark" ? "#282c34" : "#f0f3bd")};

  h1 {
    color: #ffff;
  }

  // // form {
  // //   display: flex;
  // //   justify-content: center;
  // //   align-items: center;
  // // }

  // label {
  //   color: #ffff;
  //   font-weight: 600;
  //   font-size: 1.2em;
  // }
`;

export default Page;
