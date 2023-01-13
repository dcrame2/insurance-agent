import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Variables } from '../styles/Variables';
import { MediaQueries } from '../styles/Utilities';
import Button from '../sub_components/Button';
import { H3Styles, PSecondary, H2Styles } from '../styles/Type';
import { Container } from '../styles/Utilities';
import { useInView } from 'framer-motion';
import { GlassEffect } from '../styles/Utilities';

const Section = styled.section`
    height: auto;
    width: 100%;
    padding: 150px 0 125px;
    /* background-color: ${Variables.color14}; */
    @media ${MediaQueries.mobile} {
        padding: 85px 0;
    }
    .ContactInnerContainer {
        ${Container}
        @media ${MediaQueries.mobile} {
            padding-right: 25px;
            padding-left: 25px;
        }
        .form-wrapper {
            display: flex;
            flex-direction: row;
            gap: 30px;
            justify-content: center;
            align-items: center;
            border-radius: 40px;
            border: solid 1px ${Variables.primaryColor};
            @media ${MediaQueries.tablet} {
                padding: 50px 20px;
                flex-direction: column-reverse;
                gap: 20px;
                border: solid 1px ${Variables.primaryColor};
                background-color: unset;
                background: transparent;
                box-shadow: 1px 1px 10px 2px ${Variables.secondaryColor};
                -webkit-box-shadow: 1px 1px 10px 2px ${Variables.secondaryColor};
                -moz-box-shadow: 1px 1px 10px 2px ${Variables.secondaryColor};
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            }
            @media ${MediaQueries.mobile} {
                padding: 40px 20px;
            }

            .form-info {
                display: flex;
                flex-direction: column;
                gap: 10px;
                /* margin-bottom: 50px; */
                margin: 50px;
                /* margin-top: 50px; */
                width: 40%;
                @media ${MediaQueries.tablet} {
                    margin-bottom: 20px;
                    width: 100%;
                }

                img {
                    width: 500px;
                    height: 500px;
                    border-radius: 15px;
                    margin: auto;
                    @media ${MediaQueries.tablet2} {
                        height: 300px;
                        width: 300px;
                    }
                    @media ${MediaQueries.mobile} {
                        height: 200px;
                        width: 200px;
                    }
                }
                h2 {
                    ${H2Styles}
                    text-transform: uppercase;
                    @media ${MediaQueries.tablet} {
                        text-align: center;
                    }
                }
                .location-container {
                    display: flex;
                    flex-wrap: wrap;
                    /* flex: 1 1 auto; */
                    gap: 20px;

                    .location-inner-container {
                        max-width: 45%;
                        width: 100%;
                        flex: 1 1 auto;
                        p {
                            text-align: left;
                            ${PSecondary}
                            color: ${Variables.white};
                            line-height: 25px;
                            margin-right: 5%;
                            @media ${MediaQueries.tablet} {
                                /* text-align: center; */
                                margin-right: unset;
                            }
                        }
                    }
                }
            }
            form,
            .success-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                color: ${Variables.white};
                background: transparent;
                border-radius: 40px;
                padding: 50px;
                /* border: solid 1px ${Variables.primaryColor}; */
                /* box-shadow: 1px 1px 10px 2px ${Variables.secondaryColor};
        -webkit-box-shadow: 1px 1px 10px 2px ${Variables.secondaryColor};
        -moz-box-shadow: 1px 1px 10px 2px ${Variables.secondaryColor};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, */
                /* rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */

                @keyframes shake {
                    0% {
                        transform: translate(1px, 1px) rotate(0deg);
                    }
                    10% {
                        transform: translate(-1px, -2px) rotate(-1deg);
                    }
                    20% {
                        transform: translate(-3px, 0px) rotate(1deg);
                    }
                    30% {
                        transform: translate(3px, 2px) rotate(0deg);
                    }
                    40% {
                        transform: translate(1px, -1px) rotate(1deg);
                    }
                    50% {
                        transform: translate(-1px, 2px) rotate(-1deg);
                    }
                    60% {
                        transform: translate(-3px, 1px) rotate(0deg);
                    }
                    70% {
                        transform: translate(3px, 1px) rotate(-1deg);
                    }
                    80% {
                        transform: translate(-1px, -1px) rotate(1deg);
                    }
                    90% {
                        transform: translate(1px, 2px) rotate(0deg);
                    }
                    100% {
                        transform: translate(1px, -2px) rotate(-1deg);
                    }
                }
                img {
                    width: auto;
                    height: 100px;
                    animation-iteration-count: infinite;
                    animation: shake 1s;
                }
                h4 {
                    ${PSecondary}
                    text-align: center;
                }
                @media ${MediaQueries.tablet} {
                    width: 100%;
                    padding: unset;
                    box-shadow: unset;
                    border: unset;
                    -webkit-box-shadow: unset;
                    -moz-box-shadow: unset;
                }

                h3 {
                    ${H3Styles}
                    @media ${MediaQueries.tablet} {
                        display: none;
                    }
                }
                div {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    @media ${MediaQueries.tablet} {
                        width: 100%;
                    }
                    label {
                        width: 150px;
                        ${PSecondary}
                        text-align: left;
                    }
                    input,
                    textarea {
                        text-indent: 10px;
                        outline: none;
                        font-size: 1.5rem;
                        background-color: transparent;
                        border-radius: 8px;
                        width: 500px;
                        border: 2px solid ${Variables.white};
                        &:hover,
                        &:focus {
                            box-shadow: 1px 1px 4px 1px
                                ${Variables.primaryColor};
                        }
                        @media ${MediaQueries.tablet} {
                            width: 100%;
                        }
                    }
                    input {
                        height: 40px;
                    }
                    textarea {
                        height: 75px;
                    }
                }
            }
        }
    }
`;

const OpaqueFilter = styled.div`
    background: linear-gradient(
        180deg,
        ${Variables.primaryColor} 0%,
        rgba(125, 125, 125, 0) 95%,
        rgba(255, 255, 255, 0) 100%
    );
    border-radius: 40px;
    z-index: 1;
    @media ${MediaQueries.tablet} {
        width: 100%;
        ${GlassEffect}
    }
`;

const Contact = ({ data }) => {
    const [fnameValue, setFnameValue] = useState('');
    const [lnameValue, setLnameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [successValue, setSuccessValue] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const FNameHandler = (e) => {
        setFnameValue(e.target.value);
    };

    const LNameHandler = (e) => {
        setLnameValue(e.target.value);
    };

    const EmailHandler = (e) => {
        setEmailValue(e.target.value);
    };

    const MessageHandler = (e) => {
        setMessageValue(e.target.value);
    };

    const recipients = [
        'jtully97@gmail.com',
        'dcrame2@gmail.com',
        'info@thedigitaldelight.com',
    ];

    const submitForm = (recip) => {
        recip.map((email) => {
            fetch(`https://formsubmit.co/ajax/${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    fname: `${fnameValue}`,
                    lname: `${lnameValue}`,
                    email: `${emailValue}`,
                    message: `${messageValue}`,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setSuccessValue(true);
                    setSuccessMessage(data.message);
                })
                .catch((error) => console.log(error));
        });
    };

    const OnSubmit = (e) => {
        e.preventDefault();
        submitForm(recipients);
        // https://github.com/github/fetch
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <Section id='contact'>
            <div className='ContactInnerContainer'>
                <OpaqueFilter>
                    <div className='form-wrapper'>
                        {successValue ? (
                            <div className='success-container'>
                                <h4>
                                    {successMessage} A team member will be
                                    reaching out.
                                </h4>
                                <img
                                    src='hands/Purple-in-Jumper10.png'
                                    alt='Shaking hands to initiate partnership'
                                    srcset=''
                                />
                            </div>
                        ) : (
                            <form onSubmit={OnSubmit}>
                                {/* action="https://formsubmit.co/dcrame2@gmail.com" */}
                                <input
                                    type='hidden'
                                    name='_subject'
                                    value={`New ${Variables.companyName} Submission!`}
                                />
                                <input
                                    type='hidden'
                                    name='_autoresponse'
                                    value={`Thank you from ${Variables.companyName}`}
                                ></input>
                                <input
                                    type='hidden'
                                    name='_cc'
                                    value='jtully97@gmail.com'
                                />
                                <input
                                    type='hidden'
                                    name='_captcha'
                                    value='false'
                                />
                                <input
                                    type='hidden'
                                    name='_template'
                                    value='table'
                                ></input>
                                <input
                                    type='hidden'
                                    name='_next'
                                    value='http://www.thedigitaldelight.com'
                                ></input>
                                <h3>{data.title2}</h3>
                                <div>
                                    <label htmlFor='firstname'>
                                        First Name*
                                    </label>
                                    <input
                                        onChange={FNameHandler}
                                        type='text'
                                        name='firstname'
                                        id='firstname'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor='lastname'>Last Name*</label>
                                    <input
                                        onChange={LNameHandler}
                                        type='text'
                                        name='lastname'
                                        id='lastname'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email'>
                                        Email Address*
                                    </label>
                                    <input
                                        onChange={EmailHandler}
                                        type='email'
                                        name='email'
                                        id='email'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor='message'>Message*</label>
                                    <textarea
                                        onChange={MessageHandler}
                                        type='text'
                                        name='message'
                                        id='message'
                                        required
                                    />
                                </div>
                                <Button
                                    ariaLabel='Submit form'
                                    text='Submit'
                                ></Button>
                            </form>
                        )}
                        <div ref={ref} className='form-info'>
                            <h2
                                style={{
                                    transform: isInView
                                        ? 'none'
                                        : 'translateY(-200px)',
                                    opacity: isInView ? 1 : 0,
                                    transition:
                                        'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                                }}
                            >
                                {data.title}
                            </h2>
                            <div className='location-container'>
                                <div className='location-inner-container'>
                                    <p>Street Address:</p>
                                    <p>{data.streetAddress}</p>
                                </div>
                                <div className='location-inner-container'>
                                    <p>Office Phone:</p>
                                    <p>{data.numberInfo.mobileNumber}</p>
                                </div>
                                <div className='location-inner-container'>
                                    <p>Office Hours:</p>
                                    <p>{data.officeHours.days}</p>
                                    <p>{data.officeHours.hours}</p>
                                </div>
                                <div className='location-inner-container'>
                                    <p>Social Media:</p>
                                    {data.socialMedia.socials.map((social) => {
                                        return <p>{social.name}</p>;
                                    })}
                                </div>
                            </div>
                            {/* <div style="width: 100%"> */}
                            <iframe
                                scrolling='no'
                                marginheight='0'
                                marginwidth='0'
                                src='https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1761%20N%20Dilleys%20Rd%20Suites%20208,%20Gurnee,%20IL%2060031+(Michael%20Moulis%20-%20COUNTRY%20Financial)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                                width='100%'
                                height='400'
                                frameborder='0'
                            >
                                <a href='https://www.maps.ie/distance-area-calculator.html'>
                                    area maps
                                </a>
                            </iframe>
                        </div>
                    </div>
                </OpaqueFilter>
            </div>
        </Section>
    );
};

export default Contact;
