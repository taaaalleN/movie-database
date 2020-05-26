import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 justify-content-center">
      <Link to="/" className="navbar-brand">
        <h2 className="nav-link site-title">Unique Name</h2>
      </Link>
      <ul className="navbar-nav align-items-center ">
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
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: #009ffd;

  .nav-link {
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 700;
  }

  .nav-link:hover {
    color: #ff5733 !important;
    // font-size: 1.2em;
  }

  .site-title {
    font-family: "Oswald", sans-serif;
    font-size: 1.5em;
  }
`;

export default Navbar;
