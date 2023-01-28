import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { PBaseStyles, PSecondary } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
import { motion, useInView, useAnimationControls } from "framer-motion";

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
      text-transform: uppercase;
      background-color: ${Variables.secondaryColor};
      padding: 15px 60px;
      z-index: 1;
      border-bottom: 3px solid ${Variables.primaryColor};
      @media ${MediaQueries.mobile} {
        padding: 15px 25px;
      }
    }
    img {
      grid-row: 2;
      height: 400px;
      object-fit: cover;
      max-width: 750px;
      width: 100%;
      @media ${MediaQueries.tablet} {
        max-width: 550px;
        height: 400px;
      }
      @media ${MediaQueries.mobile} {
        height: 300px;
        max-width: 350px;
      }
    }
  }
`;

const FillerModule = ({ data }) => {
  const ContainerRef = useRef(null);
  const isInView = useInView(ContainerRef, { once: true, amount: 1 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, translateX: "0" });
    }
  }, [isInView]);
  return (
    <FillerModuleContainer ref={ContainerRef}>
      <motion.div
        initial={{ opacity: 0, translateX: "-200%" }}
        animate={controls}
        className="filler-inner-container"
      >
        <h3>{data.header}</h3>
        <img src={data.image} alt={data.altText} />
      </motion.div>
    </FillerModuleContainer>
  );
};

export default FillerModule;
