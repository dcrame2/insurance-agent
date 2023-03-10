import { Variables } from './Variables';
import { MediaQueries } from './Utilities';
import { css } from 'styled-components';

export const H1Styles = css`
    font-family: ${Variables.sourceSans};
    font-size: 8rem;
    line-height: 8.3rem;
    color: ${Variables.white};
    text-transform: uppercase;

    @media ${MediaQueries.tablet} {
        font-size: 7rem;
        line-height: 7.3rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 3.8rem;
        line-height: 4.4rem;
    }
`;

export const H2Styles = css`
    font-family: ${Variables.sourceSans};
    font-size: 5rem;
    text-transform: uppercase;
    @media ${MediaQueries.tablet} {
        font-size: 3.5rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 2.75rem;
    }
`;

export const H3Styles = css`
    text-transform: uppercase;
    font-family: ${Variables.sourceSans};
    font-size: 3rem;
`;

export const H4Styles = css`
    text-transform: uppercase;
    font-family: ${Variables.sourceSans};
    font-size: 2em;
`;

export const PBaseStyles = css`
    font-family: ${Variables.sourceSans};
    font-size: 2.5rem;
    line-height: 3.3rem;
    color: ${Variables.white};

    @media ${MediaQueries.tablet} {
        font-size: 2.5rem;
        line-height: 2.8rem;
    }

    @media ${MediaQueries.mobile} {
        font-size: 2rem;
        line-height: 22px;
    }
`;

export const PSecondary = css`
    font-family: ${Variables.sourceSans};
    font-size: 1.75rem;
    line-height: 25px;

    @media ${MediaQueries.mobile} {
        font-size: 1.6rem;
        line-height: 24px;
    }
`;

export const PSmallStyles = css`
    font-family: ${Variables.sourceSans};
    font-size: 1.2rem;
    line-height: 1.5rem;
`;
