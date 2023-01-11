import React from 'react';
import styled from 'styled-components';
import { Container, MediaQueries } from '../styles/Utilities';

const CarouselContainer = styled.div``;

const CarouselInnerContainer = styled.div`
    ${Container}
`;

export default function Carousel({ ...props }) {
    return (
        <CarouselContainer>
            <CarouselInnerContainer></CarouselInnerContainer>
        </CarouselContainer>
    );
}
