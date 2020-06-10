import React, { useContext } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext, themes } from "../contexts/themeContext";

import { ButtonContainer } from "../components/Button";
import Search from "./Search";

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
      <ButtonContainer theme={theme} onClick={toggleTheme} className="theme-btn">
        {themeText}
      </ButtonContainer>
      <Link to="/" className="navbar-brand site-title">
        {/* <h2 className="nav-link site-title">Unique Name</h2> */}
        Unique Name
      </Link>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <NavLink exact to="/" className="nav-link" activeClassName="is-active">
              Home
            </NavLink>
          </li>
          {/* <li className="nav-item mx-3">
            <NavLink to="/discover" className="nav-link" activeClassName="is-active">
              Discover
            </NavLink>
          </li> */}
          <li className="nav-item mx-3">
            <NavLink to="/popular" className="nav-link" activeClassName="is-active">
              Popular
            </NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink to="/toprated" className="nav-link" activeClassName="is-active">
              Top Rated
            </NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink to="/upcoming" className="nav-link" activeClassName="is-active">
              Upcoming
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-search nav-item mx-3">
            <Search />
          </li>
        </ul>
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link" activeClassName="is-active">
              Profile Name
            </NavLink>
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

  // .nav-link:hover {
  //   color: #ff5733 !important;
  //   // font-size: 1.2em;
  // }

  .nav-item a.is-active,
  .nav-item:hover a {
    color: var(--main-orange) !important;
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
