import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { H2Styles, PBaseStyles, PSecondary } from '../styles/Type';
import { GlassEffect } from '../styles/Utilities';
import { MediaQueries } from '../styles/Utilities';
import { Link } from 'react-router-dom';

const InsuranceContainer = styled.section`
    height: auto;
    width: 100%;
    position: relative;
    ${Container}
    background-color: ${Variables.secondaryColor};

    .insurance-content {
        display: flex;
        flex-direction: column;
        max-width: ${Variables.maxWidth};
        align-items: center;
        justify-content: center;
        gap: 15px;
        text-align: center;

        h2 {
            ${H2Styles}
            margin-bottom: 8px;

            span {
                color: ${Variables.primaryColor};
                white-space: nowrap;
            }
        }
        p {
            ${PBaseStyles}
            margin-bottom: 42px;
        }
        .insurance-icon-content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
            max-width: 900px;
            width: 100%;

            @media ${MediaQueries.tablet} {
                grid-template-columns: repeat(2, 1fr);
                max-width: 500px;
            }

            @media ${MediaQueries.mobile} {
                grid-template-columns: 1fr;
                max-width: 250px;
            }

            a {
                background-color: ${Variables.primaryColor2};
                border: 3px solid ${Variables.primaryColor};
                transition: all ease 0.2s;

                &:hover,
                &:focus {
                    border: 3px solid ${Variables.white};
                    border-radius: 25px;
                }

                .icon {
                    z-index: 1;

                    height: auto;
                    padding: 20px;

                    img {
                        position: relative;
                        z-index: 2;
                        width: 100%;
                        height: auto;
                        color: ${Variables.primaryColor};
                    }
                    h3 {
                        ${PBaseStyles}
                        text-align: center;
                        color: ${Variables.white};
                    }
                }
            }
        }
    }
`;

const OpaqueFilter = styled.div`
    background: linear-gradient(
        180deg,
        ${Variables.primaryColor} 0%,
        rgba(125, 125, 125, 0) 90%,
        rgba(255, 255, 255, 0) 100%
    );
    border-radius: 12px;
    z-index: 1;
    @media ${MediaQueries.tablet} {
        ${GlassEffect}
    }
`;

const InsuranceTypes = ({ data }) => {
    return (
        <InsuranceContainer>
            <div className='insurance-content'>
                <h2>
                    {data.headings.heading}{' '}
                    <span>{data.headings.headingColor}</span>
                </h2>
                <p>{data.headings.subheader}</p>
                <div className='insurance-icon-content'>
                    {data.insurances.map((insurance, index) => {
                        const { src, alt, name, url } = insurance;
                        return (
                            // <OpaqueFilter>
                            <Link to={url}>
                                <div
                                    key={`insurance-${index}`}
                                    className='icon'
                                >
                                    <img src={src} alt={alt} />
                                    <h3>{name}</h3>
                                </div>
                            </Link>
                            // </OpaqueFilter>
                        );
                    })}
                </div>
            </div>
        </InsuranceContainer>
    );
};

export default InsuranceTypes;
