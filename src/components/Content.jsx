import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';

const ContentContainer = styled.div`
    background-color: ${Variables.primaryColor2};
`;

const ContentInnerContainer = styled.div`
    ${Container}
`;

export default function Content({ data }) {
    return (
        <ContentContainer>
            <ContentInnerContainer>
                <div className='col-1'></div>
                <div className='col-2'></div>
            </ContentInnerContainer>
        </ContentContainer>
    );
}
