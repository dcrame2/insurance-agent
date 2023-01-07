import Dropdown from "../sub_components/Dropdown";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { H2Styles, PBaseStyles, PSecondary } from "../styles/Type";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import Zoom from 'react-reveal/Zoom';

const FaqContainer = styled.section`
  display: flex;
  padding-top: 100% !important;
  /* background-image: url(${Variables.background1}); */
  ${Container}
  z-index: 1;

  height: 100%;
  @media (max-width: 961px) {
    padding: 135% 0 !important;
    flex-direction: column;
  }
  @media ${MediaQueries.mobile} {
    padding-top: 350% !important;
  }

  /* Create the parallax scrolling effect */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  @media ${MediaQueries.tablet} {
    background-color: ${Variables.color7};
    background-image: unset;
  }

  .content-container {
    text-align: center;
    padding: 160px 64px 0;
    h2 {
      ${H2Styles}
    }
    p {
      ${PSecondary}
    }
  }

  .inner-container {
    ${Container}
    max-width: 1100px;
    padding-top: 160px;
    padding-bottom: 180px;

    @media ${MediaQueries.tablet} {
      padding-top: 120px;
      padding-bottom: 160px;
    }

    @media ${MediaQueries.mobile} {
      padding-top: 80px;
      padding-bottom: 120px;
    }

    .heading-section {
      margin: 0 auto 78px;
      text-align: center;
      max-width: 800px;

      @media ${MediaQueries.tablet} {
        margin: 0 auto 48px;
      }

      @media ${MediaQueries.mobile} {
        margin: 0 auto 28px;
      }

      h2 {
        ${H2Styles}
        text-transform: uppercase;
        color: ${Variables.white};
        margin-bottom: 16px;
      }
      P {
        /* ${PBaseStyles} */
        ${PSecondary}
        color: ${Variables.white};
      }
    }

    .dropdown-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export default function FaqModule({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <FaqContainer>
      {/* id={props.id} */}
      <div className="content-container">
        <h2>Work with me</h2>
        <p>
          My clients are my #1 priority. If you need anything I am here to take
          care of you throughout the entire process. I under Insurance can be
          daunting but I will ensure you will understand everything you are
          purchasing.
        </p>
      </div>
      <div className="inner-container">
        <div ref={ref} className="heading-section">
          <h2
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {data.heading}
          </h2>
          <p>{data.subheading}</p>
        </div>
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
    </FaqContainer>
  );
}
