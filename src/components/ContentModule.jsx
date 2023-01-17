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
`;

const ContentModule = ({ data }) => {
    const col1Ref = useRef(null);
    const col2Ref = useRef(null);
    const col1IsInView = useInView(col1Ref, { once: true, amount: 1 });
    const col2IsInView = useInView(col2Ref, { once: true, amount: 1 });
    const col1Controls = useAnimationControls();
    const col2Controls = useAnimationControls();

    useEffect(() => {
        if (col1IsInView) {
            col1Controls.start({ opacity: 1, translateY: '0' });
        }
        if (col2IsInView) {
            col2Controls.start({ opacity: 1, translateY: '0' });
        }
    }, [col1IsInView, col2IsInView]);

    return (
        <ContentContainer>
            <ContentInnerContainer>
                <div className='col-1' ref={col1Ref}>
                    <motion.p
                        initial={{ opacity: 0, translateY: '-200%' }}
                        animate={col1Controls}
                    >
                        {data.content1}
                    </motion.p>
                </div>
                <div ref={col2Ref}>
                    <motion.p
                        initial={{ opacity: 0, translateY: '-200%' }}
                        animate={col2Controls}
                        className='col-2'
                    >
                        {data.content2}
                    </motion.p>
                </div>
            </ContentInnerContainer>
        </ContentContainer>
    );
};

export default ContentModule;
