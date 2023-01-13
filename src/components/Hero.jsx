import React from 'react';
import styled from 'styled-components/macro';
import { H1Styles, PSecondary, H2Styles } from '../styles/Type';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';
import { GlassEffect } from '../styles/Utilities';

const customTablet = '900px';

const HeroContainer = styled.section`
    height: 100vh;
    position: relative;

    .hero-inner-container {
        ${Container}
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 45px;
        justify-content: space-around;

        @media (max-width: ${customTablet}) {
            justify-content: space-between;
            gap: 15px;
            flex-direction: column;
            align-items: center;
            padding-top: 150px;
        }

        @media ${MediaQueries.mobile} {
            align-items: left;
            gap: 0;
            justify-content: center;
            gap: 25px;
        }

        .hero-content {
            flex-direction: column;
            display: flex;
            justify-content: center;
            gap: 10px;
            h1 {
                text-transform: uppercase;
                ${H1Styles}

                span {
                    color: ${Variables.primaryColor};
                }
            }
            p {
                ${PSecondary}
            }

            h2 {
                text-transform: uppercase;
                ${H2Styles}
                color: ${Variables.white};
            }
        }

        .hero-img-content {
            max-width: 450px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            height: auto;

            @media (max-width: ${customTablet}) {
                max-width: unset;
                overflow: auto;
            }

            img {
                height: auto;

                @media (max-width: ${customTablet}) {
                    height: 100%;
                }
            }
        }
    }
`;

const Hero = ({ data }) => {
    return (
        <HeroContainer>
            <div className='hero-inner-container'>
                <div className='hero-content'>
                    <p>{data.homeHero.eyebrow1}</p>
                    <h1>
                        {data.homeHero.heading1}{' '}
                        <span>{data.homeHero.heading1Color}</span>
                    </h1>
                    <h2>{data.homeHero.heading2}</h2>
                </div>
                <div className='hero-img-content'>
                    <img
                        src={data.homeHero.heroImgSrc}
                        alt={data.homeHero.heroImgAlt}
                    />
                </div>
            </div>
        </HeroContainer>
    );
};

export default Hero;
