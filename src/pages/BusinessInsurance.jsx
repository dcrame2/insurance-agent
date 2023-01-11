import React from "react";
import { Variables } from "../styles/Variables";
import { BusinessInsuranceFaqData, BusinessInsuranceICMData } from "../data/Data";
import ImageContentModule from "../components/ImageContentModule";
import Spacer from "../sub_components/Spacer";
import FaqModule from "../components/FaqModule";
const BusinessInsurance = () => {
  return  <>
  <ImageContentModule  {...BusinessInsuranceICMData} />
  <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
  <FaqModule {...BusinessInsuranceFaqData} />
  </>
};

export default BusinessInsurance;
