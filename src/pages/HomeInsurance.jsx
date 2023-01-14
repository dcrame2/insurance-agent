import React from "react";
import ImageContentModule from "../components/ImageContentModule";
import FaqModule from "../components/FaqModule";
import {
  HomeInsuranceICMData,
  HomeInsuranceFaqData,
  ContactBarData,
} from "../data/Data";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";
import ContactBarModule from "../components/ContactBarModule";

const HomeInsurance = () => {
  return (
    <>
      <ImageContentModule imgPlacement="right" {...HomeInsuranceICMData} />
      <Spacer color={Variables.black} desktop={0} tablet={120} mobile={100} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={244}
        tablet={120}
        mobile={100}
      />
      <FaqModule {...HomeInsuranceFaqData} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={244}
        tablet={120}
        mobile={100}
      />
      <ContactBarModule data={ContactBarData} />
    </>
  );
};

export default HomeInsurance;
