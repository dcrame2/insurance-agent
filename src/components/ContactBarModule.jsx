import React from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
import { H2Styles, H3Styles } from "../styles/Type";
import LinkButton from "../sub_components/LinkButton";

const ContactBarContainer = styled.section`
  height: auto;
  width: 100%;
  padding: 150px;
  background-color: ${Variables.$darkGray};
  @media ${MediaQueries.mobile} {
    padding: 50px;
  }

  .contactbar-inner-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    h3 {
      ${H2Styles}
      color: ${Variables.white};
      text-align: center;
    }
  }
`;

const ContactBarModule = ({ data }) => {
  return (
    <ContactBarContainer>
      <div className="contactbar-inner-container">
        <h3>{data.header}</h3>
        <LinkButton
          ariaLabel={data.button.label}
          text={data.button.text}
          href={data.button.url}
        ></LinkButton>
      </div>
    </ContactBarContainer>
  );
};

export default ContactBarModule;
