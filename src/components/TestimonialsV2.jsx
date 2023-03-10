import React, { useRef } from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Container, MediaQueries } from '../styles/Utilities';
import { Variables } from '../styles/Variables';
import { H2Styles, H3Styles, PSecondary } from '../styles/Type';
import Arrow from '../sub_components/svg/Arrow';
import { useInView, motion, useAnimationControls } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import LinkButton from '../sub_components/LinkButton';

const ModuleContainer = styled.section`
    position: relative;
    background-color: ${Variables.color14};

    .quote {
        color: ${Variables.white};
        /* padding: 10px; */
        z-index: -1;
        opacity: 0.3;
        right: 20%;
        top: 100px;
        transform: rotate(30deg);
        font-size: 100px;
        position: absolute;

        @media ${MediaQueries.tablet} {
            right: 10%;
            top: 75px;
        }
        @media ${MediaQueries.mobile} {
            right: 13%;
            top: 103px;
            font-size: 55px;
        }
    }
`;

const InnerContainer = styled.div`
    ${Container}
    padding-top: 100px;
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;
    gap: 50px;

    @media ${MediaQueries.tablet} {
        gap: 42px;
    }

    @media ${MediaQueries.mobile} {
        padding-top: 110px;
        padding-bottom: 110px;
    }

    .heading-container {
        text-align: center;

        h2 {
            ${H2Styles}
            margin-bottom: 10px;
        }
        h3 {
            ${PSecondary}
        }
    }

    .carousel-wrapper {
        display: flex;
        justify-content: center;
        gap: 50px;

        @media ${MediaQueries.tablet} {
            gap: 30px;
        }

        @media ${MediaQueries.mobile} {
            gap: 12px;
        }
        .content-wrapper {
            display: grid;
            justify-items: center;

            .tile {
                grid-row: 1;
                grid-column: 1;
                text-align: center;
                opacity: 0;
                transition: opacity ease 0.4s, transform ease 0.35s;
                display: flex;
                justify-content: center;
                flex-direction: column;
                max-width: 660px;
                background-color: ${Variables.primaryColor2};
                border-bottom: 2px solid ${Variables.primaryColor};
                padding: 26px 32px 28px;
                @media ${MediaQueries.tablet} {
                    padding: 20px 26px 24px;
                }

                &.left-origin {
                    transform: translateX(-120px);
                }

                &.right-origin {
                    transform: translateX(120px);
                }

                &.active {
                    opacity: 1;
                    transform: translateX(0px);
                    transition: opacity ease-out 0.4s, transform ease-out 0.35s;
                }

                h4 {
                    ${H3Styles}
                    margin-bottom: 12px;

                    @media ${MediaQueries.mobile} {
                        margin-bottom: 4px;
                    }
                }

                p.content {
                    ${PSecondary}
                }
            }
        }
        button {
            background-color: unset;
            border: unset;
            z-index: 1;

            &.prev {
                svg {
                    transform: rotate(180deg);
                }
            }

            svg {
                transition: transform ease 0.3s;
                @media ${MediaQueries.mobile} {
                    transition: unset;
                }
            }
        }
    }
    ul.indicators {
        display: flex;
        list-style: none;
        gap: 20px;
        justify-content: center;
        z-index: 1;

        @media ${MediaQueries.mobile} {
            gap: 16px;
        }

        li {
            button {
                position: relative;
                width: 20px;
                height: 20px;
                /* border-radius: 50%; */
                border: unset;
                background-color: ${Variables.primaryColor};
                transition: transform ease 0.2s, color ease 0.2s;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

                &:hover {
                    transform: scale(1.1);
                    transition: transform ease 0.2s;
                }

                &:after {
                    content: '';
                    background-color: ${Variables.color9};
                    position: absolute;
                    z-index: 0;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 0;
                    margin: auto;
                    /* border-radius: 50%; */
                    width: 0%;
                    height: 0%;
                    transition: width ease 0.3s, height ease 0.3s;
                }
            }

            &.active {
                button {
                    transform: scale(1.3);
                    &:after {
                        width: 100%;
                        height: 100%;
                        transition: width ease 0.3s, height ease 0.3s;
                    }
                }
            }
        }
    }
`;

export default function TestimonialsV2({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [leftPressed, setLeftPressed] = useState(null);
    const max = data.testimonials.length - 1;
    //   const ref = useRef(null);
    //   const isInView = useInView(ref, { once: true })

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

    const nextPressed = () => {
        setLeftPressed(false);
        if (activeIndex < max) {
            setActiveIndex((activeIndex) => activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    };

    const prevPressed = () => {
        setLeftPressed(true);
        if (activeIndex > 0) {
            setActiveIndex((activeIndex) => activeIndex - 1);
        } else {
            setActiveIndex(max);
        }
    };

    return (
        <ModuleContainer>
            <div className='quote'>
                <FaQuoteRight />
            </div>
            <InnerContainer>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-200%' }}
                    animate={controls}
                    className='heading-container'
                >
                    <h2
                    // style={{
                    //   transform: isInView ? "none" : "translateY(-200px)",
                    //   opacity: isInView ? 1 : 0,
                    //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    // }}
                    >
                        {data.heading}
                    </h2>
                    {/* <h3>{data.subheading}</h3> */}
                </motion.div>
                <div className='carousel-wrapper'>
                    <motion.button
                        className='prev'
                        onClick={prevPressed}
                        aria-label='previous testimonial'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 17,
                        }}
                    >
                        <Arrow />
                    </motion.button>
                    <motion.div
                        initial={{ opacity: 0, translateY: '-200%' }}
                        animate={controls}
                        className='content-wrapper'
                    >
                        {data.testimonials.map((testimonial, index) => {
                            return (
                                <div
                                    key={`tile-${index}`}
                                    className={`tile ${
                                        activeIndex === index ? 'active' : ''
                                    } ${
                                        leftPressed
                                            ? 'left-origin'
                                            : 'right-origin'
                                    }`}
                                >
                                    <h4>{testimonial.name}</h4>
                                    <p className='content'>
                                        {testimonial.content}
                                    </p>
                                </div>
                            );
                        })}
                    </motion.div>
                    <motion.button
                        className='next'
                        onClick={nextPressed}
                        aria-label='next testimonial'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 17,
                        }}
                    >
                        <Arrow />
                    </motion.button>
                </div>
                <ul className='indicators'>
                    {data.testimonials.map((item, index) => {
                        return (
                            <li
                                key={`button-${index}`}
                                className={`${
                                    activeIndex === index ? 'active' : ''
                                }`}
                            >
                                <button
                                    onClick={(activeIndex) =>
                                        setActiveIndex(index)
                                    }
                                    aria-label={`view testimonial ${index}`}
                                ></button>
                            </li>
                        );
                    })}
                </ul>
                <LinkButton
                    text={data.button.text}
                    aria-label={data.button.ariaLabel}
                    href={data.button.href}
                    target={data.button.target}
                    aTag={data.button.aTag}
                />
            </InnerContainer>
        </ModuleContainer>
    );
}
