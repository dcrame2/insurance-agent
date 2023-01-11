import React from "react";
import Hero from "../components/Hero";
import InsuranceTypes from "../components/InsuranceTypes";
import Contact from "../components/Contact";
import FaqModule from "../components/FaqModule";
import {
  HomeData,
  InsuranceTypesData,
  FaqData,
  ContactFormData,
} from "../data/Data";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";

const Home = () => {
  return (
    <>
      <Hero data={HomeData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <InsuranceTypes data={InsuranceTypesData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <FaqModule data={FaqData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <Contact data={ContactFormData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
    </>
  );
};

export default Home;
