import { useState } from "react";
import styled from "styled-components";
import { PBaseStyles, PSecondary } from "../styles/Type";
import { MediaQueries } from "../styles/Utilities";
import { Variables } from "../styles/Variables";
import DropIndicator from "./svg/DropIndicator";
import { GlassEffect } from "../styles/Utilities";
const Container = styled.div`
  display: relative;
  /* border-bottom: 2px solid ${Variables.cfgreen}; */
  border: 2px solid ${Variables.cfgreen};
  border-radius: 12px;
  height: auto;
  padding: 0 10px;

  .wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    position: relative;

    .toggle {
      background-color: unset;
      border: unset;
      ${PBaseStyles}
      color: ${Variables.white};
      padding: 16px 85px 16px 0;
      width: 100%;
      text-align: left;
      z-index: 1;
      transition: color ease 0.3s;

      @media ${MediaQueries.tablet} {
        padding: 16px 45px 16px 0;
      }

      @media ${MediaQueries.mobile} {
        padding: 12px 45px 12px 0;
      }
    }
    .indicator {
      position: absolute;
      top: 25%;
      right: 0;
      display: flex;
      align-items: center;
      svg {
        transition: transform ease 0.4s;
      }
    }
  }

  .panel {
    max-height: 0px;
    transition: max-height ease 0.4s;
    overflow: hidden;

    p {
      ${PSecondary}
      color: ${Variables.white};
      margin-bottom: 24px;
      opacity: 0;
      transition: opacity ease 0.4s;
      max-width: 80%;
    }
  }

  &.active {
    button.toggle {
      color: ${Variables.color10};
      transition: color ease 0.3s;
    }
    svg {
      transform: rotate(180deg);
      transition: transform ease 0.4s;
    }

    .panel {
      max-height: 200px;
      transition: max-height ease 0.4s;

      @media ${MediaQueries.tablet} {
        max-height: 300px;
      }

      @media ${MediaQueries.mobile} {
        max-height: 550px;
      }

      p {
        opacity: 1;
        transition: opacity ease 0.4s;
        color: ${Variables.white};
      }
    }
  }
`;
const OpaqueFilter = styled.div`
  background: linear-gradient(
    180deg,
    ${Variables.cfgreen} 0%,
    rgba(125, 125, 125, 0) 90%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 12px;
  z-index: 1;
  @media ${MediaQueries.tablet} {
    ${GlassEffect}
  }
`;

export default function Dropdown({ ...props }) {
  const [active, setActive] = useState(false);

  // useEffect(() => {}, []);

  const toggleDropdown = () => {
    setActive(!active);
  };

  return (
    <OpaqueFilter>
      <Container className={`${props.classname} ${active ? "active" : ""}`}>
        <div className="wrapper">
          <button className="toggle" onClick={toggleDropdown}>
            {props.question}
          </button>
          <div className="indicator">
            <DropIndicator />
          </div>
        </div>
        <div className="panel">
          <p>{props.answer}</p>
        </div>
      </Container>
    </OpaqueFilter>
  );
}
