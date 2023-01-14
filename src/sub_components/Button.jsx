import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { ButtonStyles } from '../styles/Utilities';

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
        <CustomButtonWrapper>
            <CustomButton
                onClick={props.onClicked}
                type={props.type}
                aria-label={props.ariaLabel}
            >
                <span>{props.text}</span>
            </CustomButton>
        </CustomButtonWrapper>
    );
}
