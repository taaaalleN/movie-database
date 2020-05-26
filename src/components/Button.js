import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => (props.theme === "dark" ? "var(--navbar-blue)" : "#02c39a")};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};

  border: 2px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  transition: all 250ms ease-in-out;

  :hover {
    border: 2px solid var(--main-orange);
    color: var(--main-orange);
  }
`;
