import { Variables } from "./Variables";
import { MediaQueries } from "./Utilities";
import { css } from "styled-components";

export const H1Styles = css`
  font-family: ${Variables.ubuntu};
  font-size: 8rem;
  line-height: 8.3rem;
  color: ${Variables.white};

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
  font-family: ${Variables.ubuntu};
  font-size: 4rem;

  @media ${MediaQueries.tablet} {
    font-size: 3.5rem;
  }

  @media ${MediaQueries.mobile} {
    font-size: 2.5rem;
  }
`;

export const H3Styles = css`
  font-family: ${Variables.ubuntu};
  font-size: 3rem;
`;

export const H4Styles = css`
  font-family: ${Variables.ubuntu};
  font-size: 2em;
`;

export const PBaseStyles = css`
  font-family: ${Variables.ubuntu};
  font-size: 3rem;
  line-height: 3.3rem;
  color: ${Variables.white};

  @media ${MediaQueries.tablet} {
    font-size: 2.5rem;
    line-height: 2.8rem;
  }

  @media ${MediaQueries.mobile} {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

export const PSecondary = css`
  font-family: ${Variables.ubuntu};
  font-size: 1.75rem;
  line-height: 25px;
`;

export const PSmallStyles = css`
  font-family: ${Variables.ubuntu};
  font-size: 1.2rem;
  line-height: 1.5rem;
`;
