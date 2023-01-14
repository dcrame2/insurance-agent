import React from "react";
import { Variables } from "../styles/Variables";
import {
  LifeInsuranceFaqData,
  LifeInsuranceICMData,
  ContactBarData,
} from "../data/Data";
import ImageContentModule from "../components/ImageContentModule";
import Spacer from "../sub_components/Spacer";
import FaqModule from "../components/FaqModule";
import ContactBarModule from "../components/ContactBarModule";
const LifeInsurance = () => {
  return (
    <>
      <ImageContentModule imgPlacement="right" {...LifeInsuranceICMData} />
      <Spacer color={Variables.black} desktop={0} tablet={120} mobile={100} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={244}
        tablet={120}
        mobile={100}
      />
      <FaqModule {...LifeInsuranceFaqData} />
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

export default LifeInsurance;
