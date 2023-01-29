import { motion, useInView, useAnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { PBaseStyles } from '../styles/Type';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const CardStyles = styled.div`
    background-color: ${Variables.primaryColor2};
    border: 3px solid ${Variables.primaryColor};
    transition: border ease 0.2s, border-radius ease 0.2s;
    min-width: 126px;

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
`;

export default function Card({ ...props }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });
    const controls = useAnimationControls();
    const [isInViewFired, setIsInViewFired] = useState(false);
    const [initial, setInitial] = useState({ opacity: 0, scale: 0.5 });

    useEffect(() => {
        if (isInView) {
            setIsInViewFired(true);
            controls.start({
                opacity: 1,
                scale: 1,
            });
        }

        if (isInViewFired) {
            setInitial({ opacity: 1, scale: 1 });
        }
    }, [isInView, isInViewFired]);

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={controls}
            transition={{
                default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    opacity: 0,
                },
                scale: {
                    type: 'spring',
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
        >
            <CardStyles>
                <Link to={props.to}>
                    <div className='icon'>
                        <img src={props.imgSrc} alt={props.imgAlt} />
                        <h3>{props.heading}</h3>
                    </div>
                </Link>
            </CardStyles>
        </motion.div>
    );
}
