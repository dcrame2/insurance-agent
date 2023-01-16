import "./global.css";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  NavigationData,
  ContactFormData,
  FooterData,
  HomeInsuranceICMData,
  HomeInsuranceFaqData,
} from "./data/Data";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import BusinessInsurance from "./pages/BusinessInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import CarInsurance from "./pages/CarInsurance";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
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
      <HashRouter>
        <ScrollToTop />
        <Navigation backdrop={navBackdrop} data={NavigationData} />
        <Content />
        <Footer data={FooterData} />
      </HashRouter>
    </>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/car-insurance" element={<CarInsurance />} />
        <Route path="/life-insurance" element={<LifeInsurance />} />
        <Route
          path="/home-insurance"
          element={
            <HomeInsurance
              data={(HomeInsuranceICMData, HomeInsuranceFaqData)}
            />
          }
        />
        <Route path="/business-insurance" element={<BusinessInsurance />} />
        <Route path="/contact" element={<Contact data={ContactFormData} />} />
      </Routes>
    </div>
  );
}
