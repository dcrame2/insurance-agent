import "./global.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import InsuranceTypes from "./components/InsuranceTypes";
import {
  HomeData,
  NavigationData,
  InsuranceTypesData,
  FaqData,
} from "./data/Data";
import FaqModule from "./components/FaqModule";
import Spacer from "./sub_components/Spacer";
import { Variables } from "./styles/Variables";

function App() {
  const [navBackdrop, setNavBackdrop] = useState(false);
  const [scrollY, setScrollY] = useState();

  const scrollListener = () => {
    window.onscroll = function (e) {
      setScrollY(this.scrollY);
      // Nav functionality
      if (this.scrollY > 83) {
        setNavBackdrop(true);
      } else {
        setNavBackdrop(false);
      }
    };
  };

  scrollListener();
  return (
    <>
      <Navigation backdrop={navBackdrop} data={NavigationData} />
      <Hero data={HomeData} />
      <Spacer
        color={Variables.color20}
        desktop={244}
        tablet={120}
        mobile={100}
      />
      <InsuranceTypes data={InsuranceTypesData} />
      <Spacer
        color={Variables.color20}
        desktop={244}
        tablet={120}
        mobile={100}
      />
      <FaqModule data={FaqData} />
    </>
  );
}

export default App;
