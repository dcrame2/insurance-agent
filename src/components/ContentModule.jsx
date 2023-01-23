import styled from "styled-components";
import { Variables } from "../styles/Variables";
import { Container, MediaQueries } from "../styles/Utilities";
import { PBaseStyles, H2Styles } from "../styles/Type";
import {
  filterProps,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ContentContainer = styled.div`
  background-color: ${Variables.primaryColor2};
  h2 {
    ${H2Styles}
    text-transform: uppercase;
    text-align: center;
  }
`;

const ContentInnerContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 2 ? "1fr 1fr" : "1fr"};
  gap: ${(props) => (props.columns === 2 ? "70px" : "1em")};
  border-bottom: 2px solid ${Variables.primaryColor};
  @media ${MediaQueries.tablet} {
    grid-template-columns: 1fr;
    gap: ${(props) => (props.columns === 2 ? "50px" : "1em")};
  }

  p {
    ${PBaseStyles}
    line-height: 45px;
    margin-bottom: 1em;
    @media ${MediaQueries.tablet} {
      line-height: 40px;
    }
    @media ${MediaQueries.mobile} {
      line-height: 35px;
    }
  }
`;

const ContentModule = ({ data, ...props }) => {
  const ContainerRef = useRef(null);
  const isInView = useInView(ContainerRef, { once: true, amount: 1 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, translateY: "0" });
    }
  }, [isInView]);

  return (
    <ContentContainer>
      <motion.h2
        ref={ContainerRef}
        initial={{ opacity: 0, translateY: "-200%" }}
        animate={controls}
      >
        {data.header}
      </motion.h2>
      <ContentInnerContainer columns={props.columns}>
        <motion.div
          className="col-1"
          initial={{ opacity: 0, translateY: "-200%" }}
          animate={controls}
          dangerouslySetInnerHTML={{ __html: data.content1 }}
        />

        <motion.div
          className="col-2"
          initial={{ opacity: 0, translateY: "-200%" }}
          animate={controls}
          dangerouslySetInnerHTML={{ __html: data.content2 }}
        />
      </ContentInnerContainer>
    </ContentContainer>
  );
};

export default ContentModule;
