import React from "react";
import { Variables } from "../styles/Variables";
import {
  CarInsuranceFaqData,
  CarInsuranceICMData,
  ContactBarData,
  CarInsuranceContentModuleData,
  CarInsuranceListContentModule,
  CarFillerModuleData,
} from "../data/Data";
import ImageContentModule from "../components/ImageContentModule";
import Spacer from "../sub_components/Spacer";
import FaqModule from "../components/FaqModule";
import ContactBarModule from "../components/ContactBarModule";
import ContentModule from "../components/ContentModule";
import ListContentModule from "../components/ListContentModule";
import FillerModule from "../components/FillerModule";

const CarInsurance = () => {
  return (
    <>
      <ImageContentModule imgPlacement="right" {...CarInsuranceICMData} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={100}
        tablet={80}
        mobile={40}
      />
      <ContentModule data={CarInsuranceContentModuleData} columns={2} />
      {/* <ListContentModule data={CarInsuranceListContentModule} /> */}
      <Spacer color={Variables.black} desktop={100} tablet={80} mobile={40} />

      <FillerModule data={CarFillerModuleData} />
      <Spacer color={Variables.black} desktop={100} tablet={80} mobile={40} />
      <Spacer
        color={Variables.primaryColor2}
        desktop={100}
        tablet={80}
        mobile={40}
      />
      <FaqModule {...CarInsuranceFaqData} />
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

export default CarInsurance;
