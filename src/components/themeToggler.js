import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import styled from "styled-components/macro";
import { MoonFill, SunFill } from "../images";

const ThemeToggler = ({ showLabel = true }) => {
  const [checked, setChecked] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setChecked(!checked);
    toggleTheme();
  };

  // const currentTheme = checked ? darkTheme : lightTheme;
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  const labelText = checked === true ? "Enable Light Mode" : "Enable Dark Mode";
  // const themeIcon = checked === true ? <p></p> : <svg className="theme-img" src={SunFill} alt="sun-filled"></svg>;

  return (
    <ThemeToggle theme={currentTheme} showLabel={showLabel}>
      <label htmlFor="toggle">{labelText}</label>
      <div className="toggle-container">
        <input type="checkbox" role="switch" id="toggle" onChange={() => handleClick()} checked={checked} />
        <div className="toggler" onClick={() => handleClick()}></div>
        <img className="theme-img" id="moon" src={MoonFill} alt="moon-filled" />
        <img className="theme-img" id="sun" src={SunFill} alt="sun-filled" />
      </div>
    </ThemeToggle>
  );
};

export default ThemeToggler;

const lightTheme = {
  fontColor: "#4a4a4a",
  bg: "#0984e3",
  boxShadow: "rgba(48, 48, 48, 0.15)",
  btnShadow: "inset 4px -3px 5px rgba(0, 0, 0, 0.25), 0 0 5px rgba(0, 0, 0, 0.3)",
};

const darkTheme = {
  fontColor: "#ffffff",
  bg: "#032b43",
  boxShadow: "rgba(0, 0, 0, 0.9)",
  btnShadow: "inset -3px -3px 5px rgba(0, 0, 0, 0.25), 0 0 5px rgba(0, 0, 0, 0.3)",
};

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .toggle-container {
    position: relative;
    width: 70px;
    height: 35px;
    background: ${(props) => props.theme.bg};
    // border: 1px solid #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-left: 0.5em;
  }

  label {
    display: ${(props) => (props.showLabel ? "block" : "none")};
    color: ${(props) => props.theme.fontColor};
    font-size: bold;
    user-select: none;
  }

  .toggler {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 5px;
    width: 25px;
    height: 25px;
    background: #fff;
    box-shadow: ${(props) => props.theme.btnShadow};
    border-radius: 50%;
    transition: transform 250ms;
    cursor: pointer;
    z-index: 10;

    ::before {
      content: "";
      display: none;
      width: 15px;
      height: 15px;
      border: 2px solid #333;
      border-radius: 50%;
    }
  }

  .theme-img {
    width: 25px;
    height: 25px;
    // filter: invert(1);
    user-select: none;
    transition: 250ms;
  }

  #sun {
    position: absolute;
    right: 5px;
    z-index: 1;
    filter: invert(83%) sepia(28%) saturate(566%) hue-rotate(348deg) brightness(104%) contrast(102%);
    transform: translateY(0%);
  }

  #moon {
    position: absolute;
    left: 5px;
    z-index: 1;
    filter: invert(91%) sepia(5%) saturate(1249%) hue-rotate(179deg) brightness(86%) contrast(84%);
    transform: translateY(130%);
    opacity: 0;
  }

  input[type="checkbox"] {
    opacity: 0;
  }

  input[type="checkbox"]:checked ~ #sun {
    opacity: 0;
    transform: translateY(-130%);
  }

  input[type="checkbox"]:checked ~ #moon {
    opacity: 1;
    transform: translateY(0%);
  }

  input[type="checkbox"]:checked + .toggler {
    // Måste finnas ett sätt att translata 100% till höger - alltså längst till höger av föräldern
    transform: translateX(140%);

    #sun {
      opacity: 0;
    }

    #moon {
      opacity: 0;
    }
  }
`;
