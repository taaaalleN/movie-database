import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext, themes } from "../contexts/themeContext";

import { ButtonContainer } from "../components/Button";

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonText = isAuthenticated ? "Log out" : "Log in";
  const themeText = theme === "dark" ? "Enable Light Mode" : "Enable Dark Mode";
  const bootstrapTheme = theme === "dark" ? "dark" : "light";

  return (
    // <NavWrapper className="navbar navbar-expand-lg navbar-expand-lg navbar-dark px-sm-5">
    <NavWrapper className={`navbar navbar-expand-lg navbar-expand-lg navbar-${bootstrapTheme} px-sm-5`} theme={theme}>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <button style={{ backgroundColor: `${theme}` }} onClick={toggleTheme}>
        {themeText}
      </button> */}
      <ButtonContainer theme={theme} onClick={toggleTheme}>
        {themeText}
      </ButtonContainer>
      <Link to="/" className="navbar-brand site-title">
        {/* <h2 className="nav-link site-title">Unique Name</h2> */}
        Unique Name
      </Link>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/games" className="nav-link">
              Games
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile Name
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <img src="https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_400x400.jpg" alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <ButtonContainer onClick={toggleAuth} theme={theme}>
        {buttonText}
      </ButtonContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: ${(props) => (props.theme === "dark" ? "#05668d" : "#02c39a")};

  // background: #05668d;

  .nav-link {
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 700;
  }

  .nav-link:hover {
    color: #ff5733 !important;
    // font-size: 1.2em;
  }

  .nav-link img {
    width: 45px;
    height: auto;
    border-radius: 50%;
  }

  .nav-link img:hover {
    box-shadow: 0 0 3px 2px rgb(255, 87, 51);
  }

  .site-title {
    font-family: "Oswald", sans-serif;
    font-size: 1.8em;
  }

  @media (max-width: 700px) {
    background: palevioletred;
  }
`;

export default Navbar;
