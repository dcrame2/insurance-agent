import React from "react";
import styled from "styled-components";
import { H1Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";

const HeroContainer = styled.section`
  ${Container}
  width: 100vw;
  height: 100vh;
  margin-top: 150px;
  .hero-inner-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* flex-wrap: wrap; */
    gap: 30px;
    @media ${MediaQueries.tablet} {
      flex-direction: column;
    }
    @media ${MediaQueries.mobile} {
      align-items: left;
    }
    h1 {
      text-transform: uppercase;
      ${H1Styles}
      color: ${Variables.cfgreen};
    }
    h2 {
      text-transform: uppercase;
      ${H1Styles}
      color: ${Variables.white};
    }
    img {
      height: 500px;
      width: auto;
      @media ${MediaQueries.tablet} {
        height: 350px;
      }
      @media ${MediaQueries.mobile} {
        height: 250px;
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-inner-container">
        <h1>Michael Moulis</h1>
        <img src="agent-nobg.png" alt="Michael Moulis" srcset="" />
        <h2>Country Financial</h2>
      </div>
    </HeroContainer>
  );
};

export default Hero;
