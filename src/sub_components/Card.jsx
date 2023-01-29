import { motion, useInView, useAnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { PBaseStyles } from '../styles/Type';
import { useEffect } from 'react';
import { useRef } from 'react';

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

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, scale: 1 });
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            transition={{
                delay: `.${props.index}`,
            }}
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
