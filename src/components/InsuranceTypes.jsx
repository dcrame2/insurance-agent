import React from "react";
import styled from "styled-components/macro";
import { Container } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H2Styles, PBaseStyles, PSecondary } from "../styles/Type";
import { GlassEffect } from "../styles/Utilities";
import { MediaQueries } from "../styles/Utilities";
import { Link } from "react-router-dom";

const InsuranceContainer = styled.section`
    height: auto;
    width: 100%;
    position: relative;
    ${Container}
    background-color: ${Variables.secondaryColor};

  .insurance-content {
    display: flex;
    flex-direction: column;
    max-width: ${Variables.maxWidth};
    align-items: center;
    justify-content: center;
    gap: 15px;
    text-align: center;
    h2 {
      ${H2Styles}
    }
    p {
      ${PBaseStyles}
    }
    .insurance-icon-content {
      display: flex;
      flex-direction: row;
      gap: 20px;
      @media (max-width: 961px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
      }
      .icon {
        z-index: 1;
        max-width: 200px;
        width: 100%;
        height: auto;
        border: 3px solid ${Variables.primaryColor};
        padding: 20px;
        border-radius: 12px;
        @media (max-width: 961px) {
          flex: 1 0 25%;
          max-width: 155px;
        }
        &:hover {
          border: 3px solid ${Variables.white};
        }
        img {
          position: relative;
          z-index: 2;
          width: 150px;
          height: auto;
          color: ${Variables.primaryColor};
          @media (max-width: 961px) {
            width: 100px;
          }
        }
        p {
          ${PBaseStyles}
          text-align: center;
          color: ${Variables.white};
        }
      }
    }
  }
`;

const OpaqueFilter = styled.div`
  background: linear-gradient(
    180deg,
    ${Variables.primaryColor} 0%,
    rgba(125, 125, 125, 0) 90%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 12px;
  z-index: 1;
  @media ${MediaQueries.tablet} {
    ${GlassEffect}
  }
`;

const InsuranceTypes = ({ data }) => {
  return (
    <InsuranceContainer>
      <div className="insurance-content">
        <h2>{data.headings.heading}</h2>
        <p>{data.headings.subheader}</p>
        <div className="insurance-icon-content">
          {data.insurances.map((insurance, index) => {
            const { src, alt, name, url } = insurance;
            return (
              // <OpaqueFilter>
              <Link to={url}>
                <div key={`insurance-${index}`} className="icon">
                  <img src={src} alt={alt} />
                  <p>{name}</p>
                </div>
              </Link>
              // </OpaqueFilter>
            );
          })}
        </div>
      </div>
    </InsuranceContainer>
  );
};

export default InsuranceTypes;
