import React from 'react';
import { Variables } from '../styles/Variables';
import {
    BusinessInsuranceFaqData,
    BusinessInsuranceICMData,
    ContactBarData,
    BusinessFillerModuleData,
    BusinessInsuranceContentModuleData,
} from '../data/Data';
import ImageContentModule from '../components/ImageContentModule';
import Spacer from '../sub_components/Spacer';
import FaqModule from '../components/FaqModule';
import ContactBarModule from '../components/ContactBarModule';
import FillerModule from '../components/FillerModule';
import ContentModule from '../components/ContentModule';

const BusinessInsurance = () => {
    return (
        <>
            <ImageContentModule
                imgPlacement='right'
                {...BusinessInsuranceICMData}
            />
            {/* <Spacer color={Variables.black} desktop={0} tablet={120} mobile={100} /> */}
            <Spacer
                color={Variables.primaryColor2}
                desktop={100}
                tablet={80}
                mobile={80}
            />
            <ContentModule
                data={BusinessInsuranceContentModuleData}
                columns={2}
            />
            {/* <ListContentModule data={CarInsuranceListContentModule} /> */}
            <Spacer
                color={Variables.primaryColor2}
                desktop={100}
                tablet={80}
                mobile={80}
            />
            <Spacer
                color={Variables.black}
                desktop={100}
                tablet={80}
                mobile={40}
            />
            <FillerModule data={BusinessFillerModuleData} />
            <Spacer
                color={Variables.black}
                desktop={100}
                tablet={80}
                mobile={40}
            />
            <Spacer
                color={Variables.primaryColor2}
                desktop={100}
                tablet={80}
                mobile={40}
            />
            <FaqModule {...BusinessInsuranceFaqData} />
            <Spacer
                color={Variables.primaryColor2}
                desktop={100}
                tablet={80}
                mobile={40}
            />

            <ContactBarModule data={ContactBarData} />
        </>
    );
};

export default BusinessInsurance;
