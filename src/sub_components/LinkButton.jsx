import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Link } from 'react-router-dom';

const CustomLinkStylingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    a {
        cursor: pointer;
        position: relative;
        padding: 12px 24px;
        background-color: ${Variables.color9};
        /* border-radius: 20px; */
        color: ${Variables.black};
        border: 2px solid ${Variables.white};
        text-decoration: unset;
        overflow: hidden;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        span {
            position: relative;
            z-index: 1;
            text-transform: uppercase;
            font-weight: 700;
            font-family: ${Variables.openSans};
            font-size: 1.4rem;
            color: ${Variables.white};
        }

        &:after {
            content: '';
            background-color: ${Variables.primaryColor};
            position: absolute;
            width: 0%;
            height: 0;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            border-radius: 20px;
            transition: all ease 0.2s;
            z-index: 0;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        }

        &:hover,
        :focus {
            &:after {
                height: 180%;
                width: 100%;
                transition: all ease 0.2s;
            }
        }

        &:focus {
            &:after {
                transition: height ease 0.4s;
            }
        }
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
