import React from "react";
import { Variables } from "../styles/Variables";
import {
  CarInsuranceFaqData,
  CarInsuranceICMData,
  ContactBarData,
} from "../data/Data";
import ImageContentModule from "../components/ImageContentModule";
import Spacer from "../sub_components/Spacer";
import FaqModule from "../components/FaqModule";
import ContactBarModule from "../components/ContactBarModule";
const CarInsurance = () => {
  return (
    <>
      <ImageContentModule {...CarInsuranceICMData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <FaqModule {...CarInsuranceFaqData} />
      <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
      <ContactBarModule data={ContactBarData} />
    </>
  );
};

export default CarInsurance;
