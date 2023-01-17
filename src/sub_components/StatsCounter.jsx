import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 50px;
  text-align: center;
  .counter {
    font-size: 60px;
    margin-top: 10px;
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
        counter.innerText = numberWithCommas(`${Math.ceil(count + increment)}`);
        setTimeout(updateCounter, 109);
      } else {
        counter.innerText = numberWithCommas(target);
      }
    };
    updateCounter();
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
