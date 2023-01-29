import Dropdown from '../sub_components/Dropdown';
import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';
import { H2Styles, PSecondary } from '../styles/Type';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import { useRef, useEffect } from 'react';

const FaqContainer = styled.section`
    position: relative;
    display: flex;
    z-index: 1;
    background-color: ${Variables.primaryColor2};

    @media ${MediaQueries.tablet} {
        background-image: unset;
    }

    .faq-inner-container {
        display: flex;
        gap: 8%;
        ${Container}

        @media (max-width: 961px) {
            flex-direction: column;
            gap: 38px;
        }

        .content-container {
            text-align: left;
            height: auto;
            display: flex;
            flex-direction: column;
            max-width: 500px;

            @media (max-width: 961px) {
                justify-content: center;
                align-items: center;
                margin: auto;
            }
            @media ${MediaQueries.mobile} {
                text-align: center;
            }
            h2 {
                ${H2Styles}
                margin-bottom: 15px;
            }
            p {
                ${PSecondary}
            }
        }

        .faq-drop-container {
            max-width: 750px;

            .dropdown-container {
                display: flex;
                flex-direction: column;
                gap: 14px;
                list-style: none;
            }
        }
    }
`;

export default function FaqModule({ ...props }) {
    const listRef = useRef(null);
    const headingRef = useRef(null);
    const isInView = useInView(listRef, { once: true, amount: 1 });
    const listControls = useAnimationControls();
    const headingControls = useAnimationControls();
    const [isMobile, setIsMobile] = useState(false);
    const [screenDimensions, setScreenDimensions] = useState();

    useEffect(() => {
        if (isInView) {
            listControls.start({ opacity: 1, translateX: '0px' });
            headingControls.start({ opacity: 1, translateY: '0' });
        }
    }, [isInView, isMobile]);

    useEffect(() => {
        const handleResize = () => {
            setScreenDimensions(window.innerWidth);

            setIsMobile(window.innerWidth < 961);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [screenDimensions]);

    return (
        <FaqContainer>
            <div className='faq-inner-container'>
                <motion.div
                    className='content-container'
                    initial={{ opacity: 0, translateY: '200px' }}
                    animate={headingControls}
                    ref={headingRef}
                >
                    <h2>{props.headers.heading}</h2>
                    <p>{props.headers.subheader}</p>
                </motion.div>
                <div className='faq-drop-container'>
                    <ul
                        className='dropdown-container'
                        ref={isMobile ? null : listRef}
                    >
                        {props.questions.map((faq, index) => {
                            return isMobile ? (
                                <li key={`list-item-${index}`}>
                                    <Dropdown
                                        question={faq.question}
                                        answer={faq.answer}
                                        mobile={isMobile}
                                        screenDimensions={screenDimensions}
                                    />
                                </li>
                            ) : (
                                <motion.li
                                    key={`motion-list-item-${index}`}
                                    initial={{
                                        opacity: 0,
                                        translateX: '200px',
                                    }}
                                    animate={listControls}
                                    transition={{
                                        delay: `.${index}`,
                                        duration: '.35',
                                    }}
                                >
                                    <Dropdown
                                        question={faq.question}
                                        answer={faq.answer}
                                    />
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </FaqContainer>
    );
}
