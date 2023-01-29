import React from "react";
import { Variables } from "../styles/Variables";
import {
  CarInsuranceFaqData,
  CarInsuranceICMData,
  ContactBarData,
  CarInsuranceContentModuleData,
  CarFillerModuleData,
} from "../data/Data";
import ImageContentModule from "../components/ImageContentModule";
import Spacer from "../sub_components/Spacer";
import FaqModule from "../components/FaqModule";
import ContactBarModule from "../components/ContactBarModule";
import ContentModule from "../components/ContentModule";
import FillerModule from "../components/FillerModule";

const CarInsurance = () => {
  return (
    <>
      <ImageContentModule imgPlacement="right" {...CarInsuranceICMData} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={100}
        tablet={80}
        mobile={80}
      />
      <ContentModule data={CarInsuranceContentModuleData} columns={2} />
      {/* <ListContentModule data={CarInsuranceListContentModule} /> */}
      <Spacer
        color={Variables.primaryColor2}
        desktop={100}
        tablet={80}
        mobile={80}
      />
      <Spacer color={Variables.black} desktop={100} tablet={80} mobile={80} />

      <FillerModule data={CarFillerModuleData} />
      <Spacer color={Variables.black} desktop={100} tablet={80} mobile={80} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={100}
        tablet={80}
        mobile={80}
      />
      <FaqModule {...CarInsuranceFaqData} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={100}
        tablet={80}
        mobile={80}
      />

      <ContactBarModule data={ContactBarData} />
    </>
  );
};

export default CarInsurance;
