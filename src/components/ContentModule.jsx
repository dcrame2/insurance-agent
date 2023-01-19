import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { Container, MediaQueries } from '../styles/Utilities';
import { PBaseStyles } from '../styles/Type';
import {
    filterProps,
    motion,
    useAnimationControls,
    useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

const ContentContainer = styled.div`
    background-color: ${Variables.primaryColor2};
`;

const ContentInnerContainer = styled.div`
    ${Container}
    display: grid;
    grid-template-columns: ${(props) =>
        props.columns === 2 ? '1fr 1fr' : '1fr'};
    gap: ${(props) => (props.columns === 2 ? '50px' : '1em')};

    @media ${MediaQueries.tablet} {
        grid-template-columns: 1fr;
        gap: ${(props) => (props.columns === 2 ? '30px' : '1em')};
    }

    p {
        ${PBaseStyles}
        margin-bottom: 1em;
    }
`;

const ContentModule = ({ data, ...props }) => {
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
            <ContentInnerContainer columns={props.columns} ref={ContainerRef}>
                <motion.div
                    className='col-1'
                    initial={{ opacity: 0, translateY: '-200%' }}
                    animate={controls}
                    dangerouslySetInnerHTML={{ __html: data.content1 }}
                />

                <motion.div
                    className='col-2'
                    initial={{ opacity: 0, translateY: '-200%' }}
                    animate={controls}
                    dangerouslySetInnerHTML={{ __html: data.content2 }}
                />
            </ContentInnerContainer>
        </ContentContainer>
    );
};

export default ContentModule;
