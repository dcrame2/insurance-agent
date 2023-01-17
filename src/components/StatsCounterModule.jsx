import React, { useEffect } from 'react';
import StatsCounter from '../sub_components/StatsCounter';
import styled from 'styled-components';

const StatsCounterContainer = styled.section`
    width: 100%;
    height: auto;
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
