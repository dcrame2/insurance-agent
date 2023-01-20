import styled, { css } from 'styled-components';
import { Container } from '../styles/Utilities';
import { PBaseStyles } from '../styles/Type';
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
    grid-template-columns: 1fr 1fr;
    gap: 28px 20px;
    justify-items: center;

    @media ${MediaQueries.tablet} {
        grid-template-columns: 1fr;
    }
`;

const Item = styled.p`
    ${PBaseStyles}
    text-align: center;
    max-width: 473px;
    width: 100%;
    background-color: ${Variables.secondaryColor};
    padding: 24px 30px;
    border-bottom: 2px solid ${Variables.primaryColor};

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
    return (
        <LCMContainer>
            <LCMInnerContainer>
                {props.data.listItems.map((listItem, index) => {
                    return (
                        <Item
                            key={`list-item${index}`}
                            dangerouslySetInnerHTML={{ __html: listItem }}
                            index={`${index}`}
                        />
                    );
                })}
            </LCMInnerContainer>
        </LCMContainer>
    );
}
