import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';
import { PBaseStyles, H2Styles } from '../styles/Type';

const ContentContainer = styled.div`
    background-color: ${Variables.primaryColor2};
`;

const InnerContentContainer = styled.div`
    ${Container}
    h2 {
        ${H2Styles}
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 28px;

        @media ${MediaQueries.mobile} {
            margin-bottom: 18px;
            text-align: left;
        }
    }
`;

const ContentInnerContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props.columns === 2 ? '1fr 1fr' : '1fr'};
    gap: ${(props) => (props.columns === 2 ? '70px' : '1em')};
    /* border-bottom: 2px solid ${Variables.primaryColor}; */
    @media ${MediaQueries.tablet} {
        grid-template-columns: 1fr;
        //gap: ${(props) => (props.columns === 2 ? '50px' : '1em')};
        gap: unset;
    }

    p,
    li {
        ${PBaseStyles}
        line-height: 45px;
        margin-bottom: 1em;
        @media ${MediaQueries.tablet} {
            line-height: 40px;
        }
        @media ${MediaQueries.mobile} {
            line-height: 35px;
        }
    }
    ul {
        list-style-type: square;
        li {
            @media ${MediaQueries.tablet} {
                margin-left: 24px;
            }

            @media ${MediaQueries.mobile} {
                margin-left: 24px;
            }
        }
    }
`;

const ContentModule = ({ data, ...props }) => {
    return (
        <ContentContainer>
            <InnerContentContainer>
                <h2>{data.header}</h2>
                <ContentInnerContainer columns={props.columns}>
                    <div
                        className='col-1'
                        dangerouslySetInnerHTML={{ __html: data.content1 }}
                    />

                    <div
                        className='col-2'
                        dangerouslySetInnerHTML={{ __html: data.content2 }}
                    />
                </ContentInnerContainer>
            </InnerContentContainer>
        </ContentContainer>
    );
};

export default ContentModule;
