import React from "react";
import styled from "styled-components";
import { H1Styles, PSecondary, H2Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { GlassEffect } from "../styles/Utilities";

const HeroContainer = styled.section`
  width: 100vw;
  height: 100vh;

  ${Container}
  .hero-inner-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

    padding-top: 150px;

    gap: 120px;
    @media ${MediaQueries.tabletWidthInt2} {
      /* padding-top: 0; */
      gap: 0;
    }
    @media ${MediaQueries.tablet} {
      /* flex-direction: column; */
    }
    @media ${MediaQueries.mobile} {
      align-items: left;
      padding-top: 160px;
      gap: 0;
      flex-direction: column;
    }

    .hero-content {
      flex-direction: column;
      display: flex;
      /* align-items: center; */
      justify-content: center;
      gap: 10px;
      h1 {
        text-transform: uppercase;
        ${H1Styles}/* color: ${Variables.black}; */
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
      max-width: 400px;
      display: flex;
      flex-direction: column;
      /* align-items: end; */
      justify-content: end;

      img {
        height: 700px;
        width: auto;
        /* right: 200px; */
        @media ${MediaQueries.tablet} {
          height: 500px;
        }
        @media ${MediaQueries.mobile} {
          height: 250px;
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
            <div>
              <img src={props.heroImgSrc} alt={props.heroImgAlt} srcset="" />
            </div>
          </div>
        </div>
      </HeroContainer>
    </OpaqueFilter>
  );
};

export default Hero;
