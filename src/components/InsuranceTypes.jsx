import React from "react";
import styled from "styled-components/macro";
import { Container } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H2Styles, PBaseStyles, PSecondary } from "../styles/Type";
import { GlassEffect } from "../styles/Utilities";
import { MediaQueries } from "../styles/Utilities";

const InsuranceContainer = styled.section`
  height: auto;
  width: 100%;
  position: absolute;
  top: 100%;
  ${Container}

  @media (max-width: 961px) {
    top: 120%;
  }
  @media ${MediaQueries.mobile} {
    top: 100%;
  }

  .insurance-content {
    margin: 10% 0;
    display: flex;
    flex-direction: column;
    max-width: ${Variables.maxWidth};
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    h2 {
      ${H2Styles}
    }
    p {
      ${PSecondary}
    }

    .insurance-icon-content {
      display: flex;
      flex-direction: row;
      gap: 20px;
      @media (max-width: 961px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        /* align-items: center; */
      }

      .icon {
        z-index: 1;
        max-width: 200px;
        height: auto;

        /* background-color: ${Variables.white}; */
        border: 3px solid ${Variables.cfgreen};
        padding: 20px;
        border-radius: 12px;
        @media (max-width: 961px) {
          flex: 1 0 25%;

          /* width: 50%; */
          max-width: 155px;
        }

        &:hover {
          border: 3px solid ${Variables.black};
        }

        img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          color: ${Variables.cfgreen};
        }
        p {
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
    ${Variables.cfgreen} 0%,
    rgba(125, 125, 125, 0) 90%,
    rgba(255, 255, 255, 0) 100%
  );
  /* opacity: 0.6; */
  border-radius: 12px;
  /* position: absolute; */
  /* top: 0;
  bottom: 0; */

  /* width: 100%; */
  z-index: 1;

  @media ${MediaQueries.tablet} {
    /* width: 100%; */

    ${GlassEffect}
  }
`;

const InsuranceTypes = () => {
  return (
    <InsuranceContainer>
      <div className="insurance-content">
        <h2>Need insurance coverage? </h2>
        {/* Request a quote!  */}
        <p>I offer a wide range of insurance coverages all across Illinois</p>
        <div className="insurance-icon-content">
          <OpaqueFilter>
            <div className="icon">
              <img src="/icons/car_icon.svg" alt="" srcset="" />
              <p>Car</p>
            </div>
          </OpaqueFilter>
          <OpaqueFilter>
            <div className="icon">
              <img src="/icons/life_icon.svg" alt="" srcset="" />
              <p>Life</p>
            </div>
          </OpaqueFilter>
          <OpaqueFilter>
            <div className="icon">
              <img src="/icons/home_icon.svg" alt="Home" srcset="" />
              <p>Home</p>
            </div>
          </OpaqueFilter>
          <OpaqueFilter>
            <div className="icon">
              <img
                src="/icons/business_icon.svg"
                alt="Hands shaking for business"
                srcset=""
              />
              <p>Business</p>
            </div>
          </OpaqueFilter>
        </div>
      </div>
    </InsuranceContainer>
  );
};

export default InsuranceTypes;
