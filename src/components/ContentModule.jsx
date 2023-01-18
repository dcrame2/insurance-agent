import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';
import { PBaseStyles } from '../styles/Type';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ContentContainer = styled.div`
    background-color: ${Variables.primaryColor2};
`;

const ContentInnerContainer = styled.div`
    ${Container}
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media ${MediaQueries.tablet} {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    p {
        ${PBaseStyles}
    }
    br {
        margin-bottom: 1.5rem;
    }
`;

const ContentModule = ({ data }) => {
    const ContainerRef = useRef(null);
    const isInView = useInView(ContainerRef, { once: true, amount: 1 });
    const controls = useAnimationControls();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, translateY: '0' });
        }
    }, [isInView]);

    return (
        <ContentContainer>
            <ContentInnerContainer ref={ContainerRef}>
                <motion.div
                    className='col-1'
                    initial={{ opacity: 0, translateY: '-200%' }}
                    animate={controls}
                    dangerouslySetInnerHTML={{ __html: data.content1 }}
                />

                <motion.div
                    initial={{ opacity: 0, translateY: '-200%' }}
                    animate={controls}
                    className='col-2'
                    dangerouslySetInnerHTML={{ __html: data.content2 }}
                />
            </ContentInnerContainer>
        </ContentContainer>
    );
};

export default ContentModule;
