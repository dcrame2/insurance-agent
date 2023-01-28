import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { MediaQueries } from "../styles/Utilities";
import Button from "../sub_components/Button";
import { PSecondary, H2Styles } from "../styles/Type";
import { Container } from "../styles/Utilities";
import { useInView, useAnimationControls, motion } from "framer-motion";

const Section = styled.section`
  height: auto;
  width: 100%;
  position: relative;
  background-color: ${Variables.secondaryColor};
  padding: 120px 0;
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
      gap: 60px;
      justify-content: center;
      align-items: center;
      background-color: ${Variables.secondaryColor};
      @media ${MediaQueries.tablet} {
        padding: 50px 20px;
        flex-direction: column-reverse;
        gap: 20px;
      }
      @media ${MediaQueries.mobile} {
        padding: 40px 20px;
      }
      .form-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 40%;
        @media ${MediaQueries.tablet} {
          flex-direction: row;
          gap: 30px;
          margin-bottom: 20px;
          width: 100%;
        }
        @media (max-width: 700px) {
          flex-direction: column;
        }
        @media ${MediaQueries.mobile} {
          flex-direction: column;
        }
        img {
          width: 100%;
          height: 500px;
          max-width: 500px;
          @media ${MediaQueries.tablet2} {
            max-width: 400px;
            height: 400px;
          }
          @media ${MediaQueries.mobile} {
            height: 300px;
            max-width: 300px;
          }
        }
        h2 {
          ${H2Styles}
          text-transform: uppercase;
          @media ${MediaQueries.tablet} {
            text-align: left;
          }
        }
        .location-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          @media ${MediaQueries.tablet} {
            flex-direction: column;
          }
          .location-inner-container {
            max-width: 40%;
            width: 100%;
            flex: 1 1 auto;
            @media ${MediaQueries.tablet} {
              max-width: 100%;
            }
            p {
              text-align: left;
              ${PSecondary}
              color: ${Variables.white};
              line-height: 25px;
              margin-right: 5%;
              @media ${MediaQueries.tablet} {
                margin-right: unset;
                text-align: left;
              }
              @media ${MediaQueries.mobile} {
                margin-right: unset;
              }
            }
            a.social-links {
              display: inline;
              margin-right: 5px;
              ${PSecondary}
              transition: color ease 0.3s;
              &:hover {
                transition: color ease 0.3s;
                color: ${Variables.primaryColor};
              }
            }
          }
        }
      }
      .success-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        color: ${Variables.white};
        background: transparent;
        max-width: 500px;
        border-bottom: 2px solid ${Variables.primaryColor};
        padding: 20px;
        background-color: ${Variables.black};
        @media ${MediaQueries.tablet} {
          width: 100%;
        }
        img {
          width: auto;
          height: 30px;
        }
        h4 {
          ${PSecondary}
          text-align: center;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        color: ${Variables.white};
        background: transparent;
        padding: 50px;
        @media ${MediaQueries.tablet} {
          width: 100%;
          padding: unset;
          box-shadow: unset;
          border: unset;
          -webkit-box-shadow: unset;
          -moz-box-shadow: unset;
        }
        h2 {
          ${H2Styles}
          text-transform: uppercase;
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
            width: 500px;
            border: 2px solid ${Variables.primaryColor};
            &:hover,
            &:focus {
              box-shadow: 1px 1px 4px 1px ${Variables.primaryColor};
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

const Contact = ({ data }) => {
  const [fnameValue, setFnameValue] = useState("");
  const [lnameValue, setLnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [successValue, setSuccessValue] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
    "thedigitaldelightllc@gmail.com, mike.moulis@countryfinanical.com",
  ];

  const submitForm = (recip) => {
    recip.map((email) => {
      fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
  const ContainerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, translateX: "0" });
    }
  }, [isInView]);
  return (
    <>
      {/* <SubHero data={data} /> */}
      <Section id="contact">
        <div className="ContactInnerContainer">
          {/* <OpaqueFilter> */}
          <div className="form-wrapper">
            <form onSubmit={OnSubmit}>
              <input
                type="hidden"
                name="_subject"
                value={`New ${Variables.companyName} Submission!`}
              />
              <input
                type="hidden"
                name="_autoresponse"
                value={`Thank you from ${Variables.companyName}`}
              ></input>
              {/* <input type="hidden" name="_cc" value="jtully97@gmail.com" /> */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table"></input>
              <input
                type="hidden"
                name="_next"
                value="http://www.moulisfinancial.com"
              ></input>
              <h2>{data.title2}</h2>
              <div>
                <label htmlFor="firstname">First Name*</label>
                <input
                  onChange={FNameHandler}
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name*</label>
                <input
                  onChange={LNameHandler}
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address*</label>
                <input
                  onChange={EmailHandler}
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message*</label>
                <textarea
                  onChange={MessageHandler}
                  type="text"
                  name="message"
                  id="message"
                  required
                />
              </div>

              <Button ariaLabel="Submit form" text="Submit"></Button>
              {successValue ? (
                <div className="success-container">
                  <h4>
                    {successMessage} I will be reaching out as soon as possible.
                  </h4>
                  <img src={Variables.logoWhite} alt="Moulis Financial" />
                </div>
              ) : (
                ""
              )}
            </form>

            <motion.div
              initial={{ opacity: 0, translateX: "200%" }}
              animate={controls}
              ref={ref}
              className="form-info"
            >
              {/* <h2
              style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {data.title}
            </h2> */}
              <img src={data.image} alt={data.altText} />
              <div className="location-container">
                <div className="location-inner-container">
                  <p>Street Address:</p>
                  <p>{data.streetAddress}</p>
                </div>
                <div className="location-inner-container">
                  <p>Office Phone:</p>
                  <p>{data.numberInfo.mobileNumber}</p>
                </div>
                <div className="location-inner-container">
                  <p>Office Hours:</p>
                  <p>{data.officeHours.days}</p>
                  <p>{data.officeHours.hours}</p>
                </div>
                <div className="location-inner-container">
                  <p>Social Media:</p>
                  {data.socialMedia.socials.map((social) => {
                    return (
                      <a className="social-links" href={social.link}>
                        {social.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
