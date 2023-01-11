import React from "react";
import { Variables } from "../styles/Variables";
import { CarInsuranceFaqData, CarInsuranceICMData } from "../data/Data";
import ImageContentModule from "../components/ImageContentModule";
import Spacer from "../sub_components/Spacer";
import FaqModule from "../components/FaqModule";
const CarInsurance = () => {
  return  <>
  <ImageContentModule  {...CarInsuranceICMData} />
  <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
  <FaqModule {...CarInsuranceFaqData} />
  </>
};

export default CarInsurance;
