import styled, { css } from 'styled-components';
import { Container } from '../styles/Utilities';
import { PBaseStyles, H1Styles } from '../styles/Type';
import { Variables } from '../styles/Variables';
import { MediaQueries } from '../styles/Utilities';

// List Content Module: LCM
const LCMContainer = styled.div`
    position: relative;
    background-color: ${Variables.primaryColor2};
`;

const LCMInnerContainer = styled.div`
    ${Container}
    list-style: none;
    display: grid;
    grid-template-columns: auto auto;
    gap: 28px 20px;
    justify-items: center;

    @media ${MediaQueries.tablet} {
        grid-template-columns: 1fr;
    }

    span.row-count {
        ${H1Styles}
        display: flex;
        align-items: center;

        @media ${MediaQueries.tablet} {
            display: none;
        }
    }
`;

const Item = styled.p`
    ${PBaseStyles}
    text-align: center;
    //max-width: 473px;
    width: 100%;
    background-color: ${Variables.secondaryColor};
    padding: 48px 68px;
    border-bottom: 2px solid ${Variables.primaryColor};
    //border-radius: 25px 25px 0 0;

    @media ${MediaQueries.tablet} {
        padding: 34px 44px;
    }

    @media ${MediaQueries.mobile} {
        padding: 24px 34px;
    }

    ${(props) => {
        switch (props.index) {
            case '0':
                return css`
                    @media ${MediaQueries.desktop} {
                        grid-column: 1;
                        grid-row: 1;
                    }
                `;
            case '1':
                return css`
                    @media ${MediaQueries.desktop} {
                        grid-column: 2;
                        grid-row: 2;
                    }
                `;
            case '2':
                return css`
                    @media ${MediaQueries.desktop} {
                        grid-column: 1;
                        grid-row: 3;
                    }
                `;
            case '3':
                return css`
                    @media ${MediaQueries.desktop} {
                        grid-column: 2;
                        grid-row: 4;
                    }
                `;
            case '4':
                return css`
                    @media ${MediaQueries.desktop} {
                        grid-column: 1;
                        grid-row: 5;
                    }
                `;
            case '5':
                return css`
                    @media ${MediaQueries.desktop} {
                        grid-column: 2;
                        grid-row: 6;
                    }
                `;
            case '6':
                return css`
                    @media ${MediaQueries.desktop} {
                        grid-column: 1;
                        grid-row: 7;
                    }
                `;
        }
    }}
`;

export default function ListContentModule({ ...props }) {
    let rowCount = 1;
    return (
        <LCMContainer>
            <LCMInnerContainer>
                {props.data.listItems.map((listItem, index) => {
                    return (
                        <>
                            <Item
                                key={`list-item${index}`}
                                dangerouslySetInnerHTML={{ __html: listItem }}
                                index={`${index}`}
                            />
                            <span className='row-count'>{`${rowCount++}`}</span>
                        </>
                    );
                })}
            </LCMInnerContainer>
        </LCMContainer>
    );
}
