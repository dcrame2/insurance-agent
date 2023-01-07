import React from "react";
import styled from "styled-components/macro";
import { Container } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { H2Styles, PBaseStyles, PSecondary } from "../styles/Type";

const InsuranceContainer = styled.section`
  height: auto;
  width: 100%;
  position: absolute;
  top: 100%;
  ${Container}

  .insurance-content {
    margin: 10%;
    display: flex;
    flex-direction: column;
    max-width: ${Variables.maxWidth};
    align-items: center;
    justify-content: center;
    gap: 10px;
    h2 {
      ${H2Styles}
    }
    p {
      ${PSecondary}
    }

    .insurance-icon-content {
      display: flex;
      flex-direction: row;
      gap: 30px;
      .icon {
        max-width: 175px;
        background-color: ${Variables.white};
        border: 1px solid ${Variables.white};
        padding: 20px;
        border-radius: 12px;

        img {
          width: 100%;
          height: auto;
          color: ${Variables.cfgreen};
        }
        p {
          text-align: center;
          color: ${Variables.cfgreen};
        }
      }
    }
  }
`;

const InsuranceTypes = () => {
  return (
    <InsuranceContainer>
      <div className="insurance-content">
        <h2>Need insurance coverage? Request a quote!</h2>
        <p>I offer a wide range of insurance coverages all across Illinois</p>
        <div className="insurance-icon-content">
          <div className="icon">
            <img src="/icons/car_icon.svg" alt="" srcset="" />
            <p>Car</p>
          </div>
          <div className="icon">
            <img src="/icons/life_icon.svg" alt="" srcset="" />
            <p>Life</p>
          </div>
          <div className="icon">
            <img src="/icons/home_icon.svg" alt="Home" srcset="" />
            <p>Home</p>
          </div>
          <div className="icon">
            <img
              src="/icons/business_icon.svg"
              alt="Hands shaking for business"
              srcset=""
            />
            <p>Business</p>
          </div>
        </div>
      </div>
    </InsuranceContainer>
  );
};

export default InsuranceTypes;
