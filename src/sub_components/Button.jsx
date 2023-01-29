import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { ButtonStyles } from '../styles/Utilities';
import { motion } from 'framer-motion';

const CustomButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const CustomButton = styled.button`
    ${ButtonStyles}
`;

export default function Button({ ...props }) {
    return (
        <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <CustomButtonWrapper>
                <CustomButton
                    onClick={props.onClicked}
                    type={props.type}
                    aria-label={props.ariaLabel}
                >
                    <span>{props.text}</span>
                </CustomButton>
            </CustomButtonWrapper>
        </motion.div>
    );
}
