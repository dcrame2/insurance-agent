import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';
import { PBaseStyles } from '../styles/Type';

const ContentContainer = styled.div`
    background-color: ${Variables.primaryColor2};
`;

const ContentInnerContainer = styled.div`
    ${Container}
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    p {
        ${PBaseStyles}
    }
`;

export default function ContentModule({ data }) {
    return (
        <ContentContainer>
            <ContentInnerContainer>
                <div className='col-1'>
                    <p>{data.content1}</p>
                </div>
                <div className='col-2'>
                    <p>{data.content2}</p>
                </div>
            </ContentInnerContainer>
        </ContentContainer>
    );
}
