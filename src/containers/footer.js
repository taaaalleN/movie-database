import React from "react";
import styled from "styled-components/macro";
import { IoLogoGithub } from "react-icons/io";
import { FaDiscord, FaSteam } from "react-icons/fa";

const Footer = ({ theme }) => {
  return (
    <FooterContainer theme={theme}>
      <Row>
        <Column>
          {/* Lösa så att FooterContainers barn får propsen?  */}
          <Link theme={theme} href="https://github.com/taaaalleN/movie-database">
            <span className="svg-container">
              <IoLogoGithub />
            </span>
            <span>Github</span>
          </Link>
        </Column>
        <Column>
          <Link href="https://steamcommunity.com/profiles/76561197991577660">
            <span className="svg-container">
              <FaSteam />
            </span>
            <span>Steam</span>
          </Link>
        </Column>
        <Column>
          <Link href="#">
            <span className="svg-container">
              <FaDiscord />
            </span>
            <span>Discord</span>
          </Link>
        </Column>
      </Row>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  padding: 70px 56px;
  // margin: auto;
  // width: 100%;
  //   max-width: 1000px;
  flex-direction: column;
  border-top: 2px solid white;
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // right: 0;
  background: ${({ theme }) => (theme === "dark" ? "#05668d" : "#02c39a")};

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  // Tog bort grid så att länkarna inte blir tar 100% av column width
  // display: grid;
  // //   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  // grid-gap: 15px;
  // grid-auto-flow: column;

  //   @media (max-width: 1000px) {
  //     grid-template-columns: repeat(auto-fill, minmax(150, 1fr));
  //   }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 500px) {
    margin-top: 2em;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
  margin-bottom: 20px;
  font-size: 1.5em;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .svg-container {
    display: inline-flex;
    align-items: center;

    & > svg {
      width: 1.25em;
      height: 1.25em;
      margin-right: 0.4rem;
    }
  }

  :hover {
    color: #ff5733;
    transform: translateY(-5px);
    // text-decoration: underline;
  }
`;
