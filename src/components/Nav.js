import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/themeContext";

import { ButtonContainer } from "./Button";
import Search from "./Search";
import ThemeToggler from "./themeToggler";

import * as ROUTES from "../constants/routes";

import { FirebaseContext } from "../contexts/firebase";

const Navbar = ({ user }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showNav, setShowNav] = useState(false);

  const { firebase } = useContext(FirebaseContext);

  return (
    <NavWrapper theme={theme} showNav={showNav}>
      <div className="theme-toggle">
        <ThemeToggler showLabel={false} />
      </div>
      <div className="nav-toggle-container">
        <input type="checkbox" onChange={() => setShowNav((showNav) => !showNav)} checked={showNav} />
      </div>
      <div className="nav-links">
        {/* <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <Link to="/" className="navbar-brand site-title" onClick={() => setShowNav((showNav) => !showNav)}>
          Movie Database
        </Link>
        <NavLink exact to="/" activeClassName="active" onClick={() => setShowNav((showNav) => !showNav)}>
          Home
        </NavLink>
        <NavLink to="/discover" activeClassName="active" onClick={() => setShowNav((showNav) => !showNav)}>
          Discover
        </NavLink>
        <NavLink to="/popular" activeClassName="active" onClick={() => setShowNav((showNav) => !showNav)}>
          Popular
        </NavLink>
        <NavLink to="/toprated" activeClassName="active" onClick={() => setShowNav((showNav) => !showNav)}>
          Top Rated
        </NavLink>
        <NavLink to="/upcoming" activeClassName="active" onClick={() => setShowNav((showNav) => !showNav)}>
          Upcoming
        </NavLink>
      </div>
      <div className="search-container">
        <Search />
      </div>
      {user ? (
        <div className="profile">
          <NavLink to="/profile" activeClassName="active">
            {user.displayName}
          </NavLink>
          <Link to="/profile" className="avatar-link">
            <img
              className="avatar"
              src="https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_400x400.jpg"
              alt="profile-image"
            />
          </Link>
          <ButtonContainer as={Link} to={ROUTES.SIGN_IN} theme={theme} onClick={() => firebase.auth().signOut()}>
            Log out
          </ButtonContainer>
        </div>
      ) : (
        <div className="profile">
          <NavLink to="/profile" activeClassName="active">
            Username
          </NavLink>
          <Link to="/profile" className="avatar-link">
            <img
              className="avatar"
              src="https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_400x400.jpg"
              alt="profile-image"
            />
          </Link>
          <ButtonContainer as={Link} to={ROUTES.SIGN_IN} theme={theme} to={ROUTES.SIGN_IN}>
            Log in
          </ButtonContainer>
        </div>
      )}
    </NavWrapper>
  );
};

const TestLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

const NavWrapper = styled.div`
  background: ${({ theme }) => (theme === "dark" ? "#05668d" : "#02c39a")};
  width: 100%;
  height: 100px;
  // max-height: 100px;
  // height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
  transition: all 450ms ease;

  @media (max-width: 1268px) {
    flex-direction: column;
    height: ${({ showNav }) => (showNav ? "100vh" : "100px")};
    max-height: 100vh;

    .nav-links,
    .search-container {
      opacity: ${({ showNav }) => (showNav ? "1" : "0")};
    }
  }

  .theme-toggle {
    @media (max-width: 1268px) {
      position: absolute;
      top: 25px;
      left: 10px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .nav-toggle-container {
    display: none;

    @media (max-width: 1268px) {
      display: block;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-basis: 40%;
    position: relative;
    margin-left: 2em;

    @media (max-width: 1268px) {
      flex-direction: column;
      margin: auto 0;
    }
  }

  .site-title {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
  }

  .search-container {
    margin-left: auto;

    @media (max-width: 1268px) {
      margin-left: 0;
      position: absolute;
      top: 35px;
    }
  }

  .navbar-toggler {
    width: 100px;
    height: 50px;
  }

  a {
    text-decoration: none;
    color: white;
    transition: all 200ms ease-in-out;

    &:hover {
      // transform: translateY(-3px);
      color: #ff5733;
      opacity: 0.85;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  .active {
    color: #ff5733;
    font-weight: 600;
    // border-bottom: 3px solid #ff5733;
    position: relative;

    ::before {
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      background: #ff5733;
      bottom: -10px;
    }
  }

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    // width: 50px;
    // height: 50px;

    .avatar-link {
      width: 50px;
      height: 50px;
    }

    .avatar {
      height: 100%;
      width: auto;
      border: 1px solid transparent;

      &:hover {
        border: 1px solid lime;
      }
    }

    img {
      border-radius: 50%;
    }

    ${TestLink}, ${ButtonContainer} {
      margin-left: 1em;
    }

    @media (max-width: 1268px) {
      margin-left: 0;
      position: absolute;
      top: 25px;
      right: 10px;
    }
  }
`;

// const Switch = styled(ThemeToggler)`
//   background: green;
//   margin-left: 5em;
//   transform: scale(0.5);

//   @media (max-width: 1268px) {
//     position: absolute;
//     top: 10px;
//     left: 10px;
//   }
// `;

export default Navbar;
