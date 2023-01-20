import React, { useEffect } from "react";
import StatsCounter from "../sub_components/StatsCounter";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries, Container } from "../styles/Utilities";

const StatsCounterContainer = styled.section`
  ${Container}
  width: 100%;
  height: auto;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 20px;

  @media ${MediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media ${MediaQueries.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

const StatsCounterModule = ({ data }) => {
  return (
    <StatsCounterContainer>
      {data.stats.map((stat, index) => {
        return (
          <StatsCounter
            key={`statCounter-${index}`}
            stats={stat}
            index={index}
          />
        );
      })}
    </StatsCounterContainer>
  );
};

export default StatsCounterModule;
