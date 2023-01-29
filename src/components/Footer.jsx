import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries, Container } from '../styles/Utilities';
import { useEffect, useState } from 'react';
import { PSmallStyles, H4Styles } from '../styles/Type';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterElm = styled.footer`
    position: relative;
    /* background-color: ${Variables.color12}; */

    .bottom-color-strip {
        /* background-color: ${Variables.black}; */
        padding: 15px 0;
        width: 100%;

        div {
            ${Container}
            p {
                ${PSmallStyles}
                text-transform: uppercase;
                text-align: center;
            }
            a {
                display: block;
                text-align: center;
                margin-top: 8px;
                opacity: 0.4;
            }
        }
    }
`;

const FooterInner = styled.div`
    ${Container}
    padding-bottom: 50px;
    padding-top: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 100%;
    justify-items: center;
    align-items: center;
    gap: 50px;

    @media ${MediaQueries.tabletOnly} {
        grid-template-columns: 1fr 1fr;
        gap: 40px 20px;
    }

    @media ${MediaQueries.mobile} {
        grid-template-columns: 1fr;
        padding-bottom: 40px;
        padding-top: 80px;
    }

    img {
        max-width: 300px;
        width: 100%;

        @media ${MediaQueries.tabletOnly} {
            grid-row: 1;
            grid-column: 1 / 4;
        }
        @media ${MediaQueries.mobile} {
            margin-bottom: 25px;
        }
    }
    ul.social-icons {
        gap: 7px;
        flex-direction: row;
        @media ${MediaQueries.tablet} {
            align-items: center;

            justify-content: center;
        }
        li {
            a {
                font-size: 18px;
            }
        }
    }
    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        @media ${MediaQueries.tabletOnly} {
            grid-row: 2;
        }

        @media ${MediaQueries.tablet} {
            align-items: center;
        }

        @media ${MediaQueries.mobile} {
            padding-top: unset;
        }

        li {
            margin-bottom: 4px;

            h2 {
                ${H4Styles}
                text-transform: uppercase;
            }
            a {
                ${PSmallStyles}
                transition: color ease 0.4s;

                &:hover {
                    color: ${Variables.primaryColor};
                    transition: color ease 0.4s;
                    position: relative;
                }
                &.active {
                    position: relative;

                    ::before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        bottom: 0px;
                        background-color: ${Variables.primaryColor};
                    }
                }
            }
        }
    }
`;

export default function Footer({ data }) {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, []);

    return (
        <FooterElm>
            {/* <OpaqueFilter> */}
            <FooterInner>
                <motion.a
                    href='/'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                    <img
                        src={Variables.logoWhite}
                        alt={`${Variables.companyName} logo`}
                    ></img>
                </motion.a>
                <ul>
                    <li>
                        <h2>{data.resources.heading}</h2>
                    </li>
                    {data.resources.links.map((link, index) => {
                        return (
                            <li key={`resource-link-${index}`}>
                                <NavLink
                                    to={`${link.href}`}
                                    activeclassname='active'
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    <li>
                        <h2>{data.information.heading}</h2>
                    </li>
                    {data.information.links.map((link, index) => {
                        return (
                            <li key={`information-link${index}`}>
                                <a href={`${link.href}`}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <ul className='social-icons'>
                    {/* <li>
            <h2>{data.socialMedia.heading}</h2>
          </li> */}
                    {data.socialMedia.links.map((link, index) => {
                        return (
                            <li key={`information-link${index}`}>
                                <a target='_blank' href={`${link.href}`}>
                                    {link.icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </FooterInner>
            {/* </OpaqueFilter> */}
            <div className='bottom-color-strip'>
                <div>
                    <p>{`Copyright © ${date} ${Variables.companyName}`}</p>
                </div>
            </div>
        </FooterElm>
    );
}
