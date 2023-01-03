import React from "react";
import styled from "styled-components";
import { H1Styles } from "../styles/Type";

const HeroContainer = styled.section`
  width: 100vw;
  height: 100vh;
  .hero-inner-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h1 {
      ${H1Styles}
    }
    img {
      height: 500px;
      width: auto;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-inner-container">
        <h1>Country</h1>
        <img src="agent-nobg.png" alt="Michael Moulis" srcset="" />
        <h1>Financial</h1>
      </div>
    </HeroContainer>
  );
};

export default Hero;
