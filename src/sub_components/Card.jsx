import { motion, useInView } from 'framer-motion';
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
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        console.log(isInView);
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            // style={{
            //     transform: isInView ? 'none' : 'translateY(200px)',
            //     opacity: isInView ? 1 : 0,
            //     transition: '0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            // }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
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
