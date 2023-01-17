import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
    const [countChange, setCountChange] = useState(0);
    //   useEffect(() => {
    //     const counters = document.querySelectorAll(".counter");

    //     counters.forEach((counter) => {
    //       //   counter.innerText = "0";

    //       const updateCounter = () => {
    //         const target = stats.dataTarget;
    //         const count = +counter.innerText;
    //         const increment = target / 1;
    //         if (count < target) {
    //           setCountChange(`${Math.ceil(count + increment)}`);
    //           setTimeout(updateCounter, 1);
    //         } else {
    //           setCountChange(target);
    //         }
    //       };

    //       updateCounter();
    //     });
    //   }, [countChange]);

    useEffect(() => {
        const counter = document.getElementById(`counter-${index}`);

        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 87;

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    }, []);

    return (
        <CounterContainer>
            <div
                className='counter'
                id={`counter-${index}`}
                data-target={stats.dataTarget}
            ></div>
            <p>{stats.heading}</p>
        </CounterContainer>
    );
};

export default StatsCounter;
