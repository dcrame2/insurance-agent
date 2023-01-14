import styled, { css } from 'styled-components';
import { Variables } from '../styles/Variables';
import { Link } from 'react-router-dom';
import { ButtonStyles } from '../styles/Utilities';

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
        <CustomLinkStylingWrapper>
            <Link
                aria-label={props.ariaLabel}
                to={props.href}
                target={props.target}
            >
                <span>{props.text}</span>
            </Link>
        </CustomLinkStylingWrapper>
    );
}
