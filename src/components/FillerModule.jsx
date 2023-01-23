import React from "react";
import styled from "styled-components";
import { PBaseStyles, PSecondary } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";

const FillerModuleContainer = styled.section`
  width: 100%;
  height: auto;
  .filler-inner-container {
    display: grid;
    justify-items: center;
    align-content: center;
    grid-template-rows: repeat(2, auto);
    h3 {
      grid-row: 1;
      margin-bottom: -25px;
      ${PBaseStyles}
      background-color: ${Variables.secondaryColor};
      padding: 15px 40px;
      z-index: 1;
      border-bottom: 3px solid ${Variables.primaryColor};
    }
    img {
      grid-row: 2;
      max-width: 500px;
      @media ${MediaQueries.mobile} {
        max-width: 350px;
      }
    }
  }
`;

const FillerModule = () => {
  return (
    <FillerModuleContainer>
      <div className="filler-inner-container">
        <h3>Protect Your Assets</h3>
        <img src="/images/car2.jpg" alt="car" />
      </div>
    </FillerModuleContainer>
  );
};

export default FillerModule;