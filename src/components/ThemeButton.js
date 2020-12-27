import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/themeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const displayIcon = () => {
    if (theme === "dark") {
      return (
        <div className="test-div">
          <img
            id="moon"
            class="toggle-pic"
            src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/moon_symbol-512.png"
            alt="moon"
          />
        </div>
      );
    } else {
      return (
        <div className="test-div">
          <img
            id="sun"
            class="toggle-pic"
            src="https://toppng.com/uploads/preview/sun-icon-free-download-png-and-vector-sun-icon-11562902365ry8jqdxl5e.png"
            alt="sun"
          />
        </div>
      );
    }
  };

  return (
    <ThemeButtonContainer onClick={toggleTheme}>
      {displayIcon()}
      {/* <div className="theme-toggle__text">{theme}</div> */}
    </ThemeButtonContainer>
  );
};

const ThemeButtonContainer = styled.div`
  background: ${(props) => (props.theme === "dark" ? "var(--metallic-seaweed)" : "var(--mountain-meadow)")};
  // border: 1px solid white;
  border-radius: 30px;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.15);
  width: 60px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  // position: relative;

  transition: 250ms all;

  .test-div {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .toggle-pic {
    width: 40%;
    position: absolute;
  }
  #sun {
    right: 5px;
  }
  #moon {
    left: 5px;
  }
`;

export default ThemeButton;
