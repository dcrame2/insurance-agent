import React from "react";
import Hero from "../components/Hero";
import InsuranceTypes from "../components/InsuranceTypes";
import FaqModule from "../components/FaqModule";
import {
  HomeData,
  ReviewsData,
  InsuranceTypesData,
  HomePageFaqData,
  ContactBarData,
  HomePageStatsData,
} from "../data/Data";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";
import ContactBarModule from "../components/ContactBarModule";
import StatsCounterModule from "../components/StatsCounterModule";
import TestimonialsV2 from "../components/TestimonialsV2";

const Home = () => {
  return (
    <>
      <Hero data={HomeData} />
      <Spacer
        color={Variables.secondaryColor}
        desktop={124}
        tablet={100}
        mobile={50}
      />
      <InsuranceTypes data={InsuranceTypesData} />
      <Spacer
        color={Variables.secondaryColor}
        desktop={124}
        tablet={100}
        mobile={50}
      />
      <Spacer
        // shadowToggle="false"
        color={Variables.black}
        desktop={64}
        tablet={120}
        mobile={100}
      />
      <StatsCounterModule data={HomePageStatsData} />
      <Spacer
        // shadowToggle="null"
        color={Variables.black}
        desktop={64}
        tablet={120}
        mobile={100}
      />
      <Spacer
        shadowToggle="true"
        color={Variables.primaryColor2}
        desktop={64}
        tablet={120}
        mobile={100}
      />
      <FaqModule {...HomePageFaqData} />
      <Spacer
        shadowToggle="true"
        color={Variables.primaryColor2}
        desktop={64}
        tablet={120}
        mobile={100}
      />
      <TestimonialsV2 data={ReviewsData} />
      <Spacer
        shadowToggle="true"
        color={Variables.primaryColor2}
        desktop={64}
        tablet={120}
        mobile={100}
      />
      <ContactBarModule data={ContactBarData} />
    </>
  );
};

export default Home;
