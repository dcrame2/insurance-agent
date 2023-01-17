import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { H2Styles, PSecondary } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { MediaQueries, Container } from "../styles/Utilities";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .counter {
    color: ${Variables.primaryColor};
    ${H2Styles}
    margin-top: 10px;
  }
  p {
    ${PSecondary}
  }
`;

const StatsCounter = ({ stats, index }) => {
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
  }, []);

  function numberWithCommas(x) {
    return x.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <CounterContainer>
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
