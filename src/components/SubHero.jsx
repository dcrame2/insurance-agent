import React from "react";
import styled from "styled-components";
import { H3Styles, PSecondary, H2Styles } from "../styles/Type";
import { Container } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";

const SubHeroContainer = styled.div`
  ${Container};
  width: 100%;
  height: auto;
  .subhero-inner-container {
    padding: 150px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    .box-container {
      max-width: 300px;
      background-color: ${Variables.secondaryColor};
      border: 2px solid ${Variables.primaryColor};
      width: 100%;
      color: ${Variables.white};
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      svg {
        padding: 15px;
        font-size: 100px;
      }
      h3 {
        ${H3Styles}
      }
      p {
        text-align: center;
        ${PSecondary}
      }
    }
  }
`;

const SubHero = ({ data }) => {
  console.log(data);
  return (
    <SubHeroContainer>
      <div className="subhero-inner-container">
        {data.contactDetails.map((info) => {
          const { icon, subheader, content } = info;
          return (
            <div className="box-container">
              {icon}
              <h3 className="title">{subheader}</h3>
              <p className="content">{content}</p>
            </div>
          );
        })}
      </div>
    </SubHeroContainer>
  );
};

export default SubHero;
