import styled from "styled-components/macro";
import { H1Styles, PSecondary, H2Styles } from "../styles/Type";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { motion } from "framer-motion";

const customTablet = "900px";

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.3);

  .hero-inner-container {
    ${Container}
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 45px;
    justify-content: space-around;

    @media (max-width: ${customTablet}) {
      justify-content: space-between;
      gap: 15px;
      flex-direction: column;
      align-items: center;
      padding-top: 150px;
    }

    @media ${MediaQueries.mobile} {
      align-items: left;
      gap: 0;
      justify-content: center;
      gap: 25px;
    }

    div {
      flex-direction: column;
      display: flex;
      justify-content: center;
      gap: 10px;

      h2 {
        text-transform: uppercase;
        ${H1Styles}

        span {
          color: ${Variables.primaryColor};
        }
      }

      p {
        ${PSecondary}
      }

      h1 {
        text-transform: uppercase;
        ${H2Styles}
        color: ${Variables.white};
      }
    }

    .hero-img-content {
      max-width: 450px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      height: auto;
      overflow: hidden;

      @media (max-width: ${customTablet}) {
        max-width: unset;
      }

      @media ${MediaQueries.mobile} {
        transform: translateX(25px);
      }

      img {
        height: auto;

        @media (max-width: ${customTablet}) {
          height: 100%;
        }
        @media ${MediaQueries.mobile} {
          align-self: end;
        }
      }
    }
  }
`;

const OpaqueFilter = styled.div`
  background: linear-gradient(
    -90deg,
    ${Variables.primaryColor} 0%,
    rgba(125, 125, 125, 0) 90%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0.8;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;

  @media ${MediaQueries.tablet} {
    width: 100%;
  }
`;
const Hero = ({ data }) => {
  return (
    <HeroContainer>
      <OpaqueFilter>
        <div className="hero-inner-container">
          <div>
            <motion.p
              initial={{
                opacity: 0,
                transform: "translateX(-200px)",
              }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              transition={{ delay: ".200" }}
            >
              {data.homeHero.eyebrow1}
            </motion.p>
            <motion.h2
              initial={{
                opacity: 0,
                transform: "translateX(-200px)",
              }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              transition={{ delay: ".400" }}
            >
              {data.homeHero.heading1}
              <span>{data.homeHero.heading1Color}</span>
            </motion.h2>
            <motion.h1
              initial={{
                opacity: 0,
                transform: "translateX(-200px)",
              }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              transition={{ delay: ".600" }}
            >
              {data.homeHero.heading2}
            </motion.h1>
          </div>
          <div className="hero-img-content">
            <motion.img
              src={data.homeHero.heroImgSrc}
              alt={data.homeHero.heroImgAlt}
              initial={{
                opacity: 0,
                transform: "translateY(200px)",
              }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{
                delay: ".800",
              }}
            />
          </div>
        </div>
      </OpaqueFilter>
    </HeroContainer>
  );
};

export default Hero;
