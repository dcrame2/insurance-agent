import React from "react";
import ImageContentModule from "../components/ImageContentModule";
import FaqModule from "../components/FaqModule";
import { HomeInsuranceICMData, HomeInsuranceFaqData } from "../data/Data";
import Spacer from "../sub_components/Spacer";
import { Variables } from "../styles/Variables";


const HomeInsurance = () => {
  return <>
  <ImageContentModule  {...HomeInsuranceICMData} />
  <Spacer color={Variables.black} desktop={244} tablet={120} mobile={100} />
  <FaqModule {...HomeInsuranceFaqData} />
  </>
};

export default HomeInsurance;
