import "./global.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import InsuranceTypes from "./components/InsuranceTypes";
import { HomeData, NavigationData, InsuranceTypesData } from "./data/Data";

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
    <section>
      <Navigation backdrop={navBackdrop} data={NavigationData} />
      <Hero data={HomeData} />
      <InsuranceTypes data={InsuranceTypesData} />
    </section>
  );
}

export default App;
