import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries } from '../styles/Utilities';
import { H2Styles } from '../styles/Type';
import LinkButton from '../sub_components/LinkButton';
import { useInView } from 'framer-motion';

const ContactBarContainer = styled.section`
    height: auto;
    width: 100%;
    padding: 150px;
    background-color: ${Variables.secondaryColor};
    @media ${MediaQueries.mobile} {
        padding: 50px;
    }

    .contactbar-inner-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        h3 {
            ${H2Styles}
            margin-bottom: 24px;
            color: ${Variables.white};
            display: block;
            position: relative;
            z-index: 1;
            text-align: center;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(
                to right,
                ${Variables.primaryColor},
                ${Variables.primaryColor} 50%,
                #fff 50%
            );
            background-size: 200% 100%;
            background-position: -100%;
            transition: all 1s ease-in-out;

            @media ${MediaQueries.tablet} {
                margin-bottom: 20px;
            }

            &.active {
                background-position: 100%;
            }
        }
    }
`;

const ContactBarModule = ({ data }) => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { amount: 1 });
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (isInView) {
            setActive(!active);
        }
    }, [isInView]);

    return (
        <ContactBarContainer ref={headingRef}>
            <div className='contactbar-inner-container'>
                <h3 className={`${active ? 'active' : ''}`}>{data.header}</h3>
                <LinkButton
                    ariaLabel={data.button.label}
                    text={data.button.text}
                    href={data.button.url}
                ></LinkButton>
            </div>
        </ContactBarContainer>
    );
};

export default ContactBarModule;
