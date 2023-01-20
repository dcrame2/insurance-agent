import styled from 'styled-components';
import { Container } from '../styles/Utilities';

// List Content Module: LCM
const LCMContainer = styled.div`
    position: relative;
`;

const LCMInnerContainer = styled.ul`
    ${Container}
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr;
`;

const Item = styled.li``;

export default function ListContentModule() {
    return (
        <LCMContainer>
            <LCMInnerContainer></LCMInnerContainer>
        </LCMContainer>
    );
}
