import React from "react";
import Hero from "../components/Hero";
import InsuranceTypes from "../components/InsuranceTypes";
import FaqModule from "../components/FaqModule";
import {
  HomeData,
  InsuranceTypesData,
  HomePageFaqData,
  ContactBarData,
} from "../data/Data";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";
import ContactBarModule from "../components/ContactBarModule";

const Home = () => {
  return (
    <>
      <Hero data={HomeData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <InsuranceTypes data={InsuranceTypesData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <FaqModule {...HomePageFaqData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <ContactBarModule data={ContactBarData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
    </>
  );
};

export default Home;
