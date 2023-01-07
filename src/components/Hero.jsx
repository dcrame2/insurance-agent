import React from "react";
import styled from "styled-components/macro";
import { H1Styles, PSecondary, H2Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { GlassEffect } from "../styles/Utilities";

const HeroContainer = styled.section`
  width: 100vw;
  height: 100vh;

  ${Container}
  .hero-inner-container {
    height: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 130px;
    gap: 45px;
    @media (max-width: 961px) {
      justify-content: center;
      gap: 15px;
      padding-top: 400px;
      flex-direction: column;
    }
    @media ${MediaQueries.mobile} {
      align-items: left;
      padding-top: 0px;
      gap: 0;
    }

    .hero-content {
      flex-direction: column;
      display: flex;
      justify-content: center;
      gap: 10px;
      h1 {
        text-transform: uppercase;
        ${H1Styles}
      }
      p {
        ${PSecondary}
      }

      h2 {
        text-transform: uppercase;
        ${H2Styles}
        color: ${Variables.white};
      }
    }

    .hero-img-content {
      max-width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      height: auto;
      @media ${MediaQueries.mobile} {
        align-items: start;
        justify-content: start;
      }
      img {
        height: auto;
        width: 100%;
        @media ${MediaQueries.mobile} {
          height: 300px;
          width: auto;
        }
      }
    }
  }
`;

const OpaqueFilter = styled.div`
  background: linear-gradient(
    180deg,
    ${Variables.cfgreen} 0%,
    rgba(125, 125, 125, 0) 95%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0.8;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;

  @media ${MediaQueries.tablet} {
    width: 100%;

    ${GlassEffect}
  }
`;

const Hero = ({ ...props }) => {
  return (
    <OpaqueFilter>
      <HeroContainer>
        <div className="hero-inner-container">
          <div className="hero-content">
            <p>{props.eyebrow1}</p>
            <h1>{props.heading1}</h1>
            <h2>{props.heading2}</h2>
          </div>
          <div className="hero-img-content">
            {/* <div> */}
            <img src={props.heroImgSrc} alt={props.heroImgAlt} srcset="" />
            {/* </div> */}
          </div>
        </div>
      </HeroContainer>
    </OpaqueFilter>
  );
};

export default Hero;
