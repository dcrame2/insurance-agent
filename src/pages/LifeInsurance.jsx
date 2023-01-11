import React from "react";
import { Variables } from "../styles/Variables";
import { LifeInsuranceFaqData, LifeInsuranceICMData } from "../data/Data";
import ImageContentModule from "../components/ImageContentModule";
import Spacer from "../sub_components/Spacer";
import FaqModule from "../components/FaqModule";
const LifeInsurance = () => {
  return  <>
  <ImageContentModule  {...LifeInsuranceICMData} />
  <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
  <FaqModule {...LifeInsuranceFaqData} />
  </>
};

export default LifeInsurance;
