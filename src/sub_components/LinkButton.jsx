import styled, { css } from 'styled-components';
import { Variables } from '../styles/Variables';
import { Link } from 'react-router-dom';
import { ButtonStyles } from '../styles/Utilities';
import { motion } from 'framer-motion';

const CustomLinkStylingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    a {
        ${ButtonStyles}
    }
`;

export default function LinkButton({ ...props }) {
    return (
        <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <CustomLinkStylingWrapper>
                {props.aTag ? (
                    <a
                        aria-label={props.ariaLabel}
                        href={props.href}
                        target={props.target}
                    >
                        <span>{props.text}</span>
                    </a>
                ) : (
                    <Link
                        aria-label={props.ariaLabel}
                        to={props.href}
                        target={props.target}
                    >
                        <span>{props.text}</span>
                    </Link>
                )}
            </CustomLinkStylingWrapper>
        </motion.div>
    );
}
