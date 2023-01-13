import styled, { css } from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container } from '../styles/Utilities';
import { H2Styles, PSecondary } from '../styles/Type';
import { MediaQueries } from '../styles/Utilities';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const ICMContainer = styled.section`
    padding-top: 150px;
    position: relative;
    width: 100%;
    background-color: ${Variables.black};

    .ICMInnerContainer {
        ${Container}
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 85px;
        max-width: 1300px;

        @media ${MediaQueries.tablet} {
            flex-direction: column-reverse;
            gap: 48px;
        }

        @media ${MediaQueries.mobile} {
            gap: 42px;
        }

        img {
            background-color: ${Variables.black};
            max-width: 400px;
            /* width: 40%; */
            width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 1px 1px 10px 2px ${Variables.primaryColor};
            -webkit-box-shadow: 1px 1px 10px 2px ${Variables.primaryColor};
            -moz-box-shadow: 1px 1px 10px 2px ${Variables.primaryColor};

            /* @media ${MediaQueries.mobile} {
        width: 100%;
        height: 200px;
      } */
        }

        .content {
            max-width: 460px;

            h2 {
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
                <img
                    src={props.contentModule.src}
                    alt={props.contentModule.alt}
                    style={{
                        transform: isInView ? 'none' : translation,
                        opacity: isInView ? 1 : 0,
                        transition:
                            'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    }}
                />
                <div className='content'>
                    <h2>{props.contentModule.heading}</h2>
                    <p>{props.contentModule.content}</p>
                </div>
            </div>
        </ICMContainer>
    );
}
