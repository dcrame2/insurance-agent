import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Container } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { H2Styles, PBaseStyles, PSecondary } from '../styles/Type';
import { GlassEffect } from '../styles/Utilities';
import { MediaQueries } from '../styles/Utilities';
import Card from '../sub_components/Card';
import { motion, useAnimationControls, useInView } from 'framer-motion';

const InsuranceContainer = styled.section`
    height: auto;
    width: 100%;
    position: relative;
    background-color: ${Variables.secondaryColor};

    .insurance-content {
        display: flex;
        flex-direction: column;
        max-width: ${Variables.maxWidth};
        align-items: center;
        justify-content: center;
        gap: 15px;
        text-align: center;
        overflow: visible;
        ${Container}

        .heading-content {
            margin-bottom: 42px;

            @media ${MediaQueries.tablet} {
                max-width: 472px;
            }

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
            }
        }

        .insurance-icon-content {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
            max-width: 900px;
            width: 100%;
            overflow: visible;

            @media ${MediaQueries.tablet} {
                grid-template-columns: repeat(2, 1fr);
                max-width: 420px;
            }

            @media ${MediaQueries.mobile} {
                grid-template-columns: 1fr;
                max-width: 250px; //200
            }

            a {
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
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 1,
    });
    const controls = useAnimationControls();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, translateY: '0' });
        }
    }, [isInView]);

    return (
        <InsuranceContainer>
            <div className='insurance-content'>
                <motion.div
                    className='heading-content'
                    initial={{ opacity: 0, translateY: '-200%' }}
                    animate={controls}
                    ref={ref}
                >
                    <h2>
                        {data.headings.heading}
                        <span>{data.headings.headingColor}</span>
                    </h2>
                    <p>{data.headings.subheader}</p>
                </motion.div>
                <ul className='insurance-icon-content'>
                    {data.insurances.map((insurance, index) => {
                        const { src, alt, name, url } = insurance;

                        return (
                            <li key={`card-${index}`}>
                                <Card
                                    to={url}
                                    imgSrc={src}
                                    imgAlt={alt}
                                    heading={name}
                                    index={index}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </InsuranceContainer>
    );
};

export default InsuranceTypes;
