import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { H2Styles, PSecondary, PBaseStyles, H1Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { MediaQueries, Container } from "../styles/Utilities";
import { useInView, useAnimationControls, motion } from "framer-motion";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media ${MediaQueries.mobile} {
    max-width: 200px;
  }
  .counter {
    color: ${Variables.primaryColor} !important;
    ${H1Styles}
    margin-top: 10px;
  }
  p {
    ${PSecondary}
  }
`;

const StatsCounter = ({ stats, index }) => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);

  useEffect(() => {
    const counter = document.getElementById(`counter-${index}`);
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 87;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = stats.symbol + numberWithCommas(target);
      }
    };
    updateCounter();
  }, [isInView]);

  function numberWithCommas(x) {
    return x.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <CounterContainer ref={headingRef}>
      <div
        className="counter"
        id={`counter-${index}`}
        data-target={stats.dataTarget}
      ></div>
      <p>{stats.heading}</p>
    </CounterContainer>
  );
};

export default StatsCounter;
