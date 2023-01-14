import {
    Variables,
    desktopWidthInt,
    mobileWidthInt,
    tabletWidthInt2,
} from './Variables';
import { css } from 'styled-components';

export const MediaQueries = {
    desktop: `(min-width: ${desktopWidthInt}px)`,
    tablet: `(max-width: ${desktopWidthInt - 1}px)`,
    tabletOnly: `(max-width: ${desktopWidthInt - 1}px) and (min-width: ${
        mobileWidthInt + 1
    }px)`,
    mobile: `(max-width: ${mobileWidthInt}px)`,
    tablet2: `(max-width: ${tabletWidthInt2}px)`,
};

export const Container = css`
    margin: 0 auto;
    max-width: ${Variables.maxWidth};
    padding: 0 64px;

    @media (max-width: ${Variables.tabletWidthInt}) {
        padding: 0 44px;
    }

    @media (max-width: ${Variables.mobileWidth}) {
        padding: 0 24px;
    }
`;

export const FontStyles1 = css`
    color: ${Variables.white};
    font-size: 22px;
    text-transform: uppercase;
`;

export const GlassEffect = css`
    backdrop-filter: blur(90px);
    box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.08);
    -webkit-backdrop-filter: grayscale(0.2) blur(90px);
`;

export const BlurEffect = css`
    backdrop-filter: grayscale(0) blur(10px);
    box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.08);
`;

export const transition = css`
    transition: all ease 0.4s;
`;

export const ButtonStyles = css`
    cursor: pointer;
    position: relative;
    padding: 12px 24px;
    background-color: ${Variables.color9};
    color: ${Variables.black};
    border: 2px solid ${Variables.white};
    text-decoration: unset;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    ${transition}

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
    &:focus {
        ${transition}
        border-radius: 15px;

        &:after {
            height: 180%;
            width: 100%;
            ${transition}
            border-radius: 15px;
        }
    }

    &:focus {
        &:after {
            ${transition}
        }
    }
`;
