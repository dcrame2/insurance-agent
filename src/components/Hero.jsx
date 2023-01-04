import React from 'react';
import styled from 'styled-components';
import { H1Styles, PSecondary, H2Styles } from '../styles/Type';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';
import { GlassEffect } from '../styles/Utilities';

const HeroContainer = styled.section`
    ${Container}
    width: 100vw;
    height: 100vh;
    margin-top: 150px;

    .hero-inner-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: space-between; */

        gap: 30px;
        @media ${MediaQueries.tablet} {
            flex-direction: column;
        }
        @media ${MediaQueries.mobile} {
            align-items: left;
        }

        .hero-content {
            flex-direction: column;
            display: flex;
            gap: 10px;
            h1 {
                text-transform: uppercase;
                ${H1Styles}/* color: ${Variables.black}; */
            }
            p {
                ${PSecondary}
            }
        }

        h2 {
            text-transform: uppercase;
            ${H1Styles}
            color: ${Variables.white};
        }
        img {
            height: 500px;
            width: auto;
            @media ${MediaQueries.tablet} {
                height: 350px;
            }
            @media ${MediaQueries.mobile} {
                height: 250px;
            }
        }
    }
`;

const OpaqueFilter = styled.div`
    background: linear-gradient(
        180deg,
        ${Variables.cfgreen} 0%,
        rgba(125, 125, 125, 0) 95%,
        rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.8;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;

    @media ${MediaQueries.tablet} {
        width: 100%;

        ${GlassEffect}
    }
`;

const Hero = ({ ...props }) => {
    return (
        <OpaqueFilter>
            <HeroContainer>
                <div className='hero-inner-container'>
                    <div className='hero-content'>
                        <p>{props.eyebrow1}</p>
                        <h1>{props.heading1}</h1>
                    </div>
                    <img
                        src={props.heroImgSrc}
                        alt={props.heroImgAlt}
                        srcset=''
                    />
                    <div className='hero-content'>
                        <p>{props.eyebrow2}</p>
                        <h2>{props.heading2}</h2>
                    </div>
                </div>
            </HeroContainer>
        </OpaqueFilter>
    );
};

export default Hero;
