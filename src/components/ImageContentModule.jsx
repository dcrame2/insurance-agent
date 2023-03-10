import styled, { css } from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import { H2Styles, PSecondary } from '../styles/Type';
import { MediaQueries } from '../styles/Utilities';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const ICMContainer = styled.section`
    padding-top: 70px;
    position: relative;
    width: 100%;
    background-color: ${Variables.black};
    display: flex;
    justify-content: end;

    @media ${MediaQueries.tablet} {
        justify-content: center;
    }

    .ICMInnerContainer {
        /* ${Container} */
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        grid-template-rows: 1fr;

        gap: 85px;
        /* max-width: 1300px; */

        @media ${MediaQueries.tablet} {
            grid-template-rows: 1fr 0.5fr;
            flex-direction: column;
            justify-content: center;
            grid-template-columns: 1fr;
            gap: 42px;
        }

        @media ${MediaQueries.mobile} {
            /* gap: 42px; */
        }

        img {
            grid-column: 2;
            background-color: ${Variables.black};
            max-width: 100vh;
            width: 100%;
            grid-row: 1;
            object-fit: cover;

            @media ${MediaQueries.tablet} {
                height: 60vh;
                max-width: unset;
                grid-row: 1;
                grid-column: 1;
            }

            @media ${MediaQueries.mobile} {
                height: 40vh;
                /* max-width: unset; */
            }
        }

        .content {
            grid-column: 1;
            max-width: 460px;
            grid-row: 1;
            z-index: 1;

            @media ${MediaQueries.tablet} {
                text-align: center;
                grid-row: 2;
                margin: -180px 20px 0;
                border-bottom: 2px solid ${Variables.primaryColor};
                padding: 20px;
                background-color: ${Variables.secondaryColor};
            }

            @media ${MediaQueries.mobile} {
                text-align: center;
                grid-row: 2;
                margin-top: -225px;
            }

            h1 {
                ${H2Styles};
                text-transform: uppercase;
                color: ${Variables.white};
                margin-bottom: 12px;
            }

            p {
                ${PSecondary}
                color: ${Variables.white};
                white-space: pre-wrap;
            }
        }

        ${(props) =>
            props.imgPlacement === 'right' &&
            css`
                flex-direction: row-reverse;
            `}
    }
`;

export default function ImageContentModule({ ...props }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    let translation; // set translation based on image placement prop
    {
        props.imgPlacement === 'right'
            ? (translation = 'translateX(200px)')
            : (translation = 'translateX(-200px)');
    }

    return (
        <ICMContainer
            id={props.contentModule.id}
            imgPlacement={props.imgPlacement}
        >
            <div className='ICMInnerContainer' ref={ref}>
                <div className='content'>
                    <h1>{props.contentModule.heading}</h1>
                    <p>{props.contentModule.content}</p>
                </div>
                <motion.img
                    src={props.contentModule.src}
                    alt={props.contentModule.alt}
                    initial={{
                        opacity: 0,
                        transform: 'translateX(200px)',
                    }}
                    animate={{ opacity: 1, transform: 'translateX(0px)' }}
                    transition={{ delay: '.400' }}
                />
            </div>
        </ICMContainer>
    );
}
