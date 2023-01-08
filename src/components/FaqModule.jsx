import Dropdown from "../sub_components/Dropdown";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { H2Styles, PBaseStyles, PSecondary } from "../styles/Type";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import Zoom from 'react-reveal/Zoom';

const FaqContainer = styled.section`
  position: relative;
  display: flex;
  z-index: 1;
  /* Create the parallax scrolling effect */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  @media ${MediaQueries.tablet} {
    /* background-color: ${Variables.color7}; */
    background-image: unset;
  }

  .faq-inner-container {
    display: flex;
    gap: 15%;
    ${Container}

    @media (max-width: 961px) {
      flex-direction: column;
      gap: 20px;
    }

    .content-container {
      text-align: center;
      height: auto;
      display: flex;
      flex-direction: column;
      max-width: 500px;

      @media (max-width: 961px) {
        justify-content: center;
        align-items: center;
        margin: auto;
      }
      h2 {
        ${H2Styles}
        margin-bottom: 15px;
      }
      p {
        ${PSecondary}
      }
    }

    .faq-drop-container {
      max-width: 750px;

      .dropdown-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;

export default function FaqModule({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <FaqContainer>
      {/* id={props.id} */}
      <div className="faq-inner-container">
        <div className="content-container">
          <h2>{data.headers.heading}</h2>
          <p>{data.headers.subheader}</p>
        </div>
        <div className="faq-drop-container">
          <div className="dropdown-container">
            {data.questions.map((faq, index) => {
              return (
                // <Zoom key={`zoom-${index}`}>
                <Dropdown
                  key={`faq-dropdown-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                />
                // </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </FaqContainer>
  );
}
