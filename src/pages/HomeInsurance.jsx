import React from 'react';
import ImageContentModule from '../components/ImageContentModule';
import FaqModule from '../components/FaqModule';
import {
    HomeInsuranceICMData,
    HomeInsuranceFaqData,
    ContactBarData,
    HomeFillerModuleData,
    HomeInsuranceContentModuleData,
} from '../data/Data';
import Spacer from '../sub_components/Spacer';
import { Variables } from '../styles/Variables';
import ContactBarModule from '../components/ContactBarModule';
import FillerModule from '../components/FillerModule';
import ContentModule from '../components/ContentModule';

const HomeInsurance = () => {
    return (
        <>
            <ImageContentModule
                imgPlacement='right'
                {...HomeInsuranceICMData}
            />
            {/* <Spacer color={Variables.black} desktop={0} tablet={120} mobile={100} /> */}
            <Spacer
                color={Variables.primaryColor2}
                desktop={100}
                tablet={80}
                mobile={80}
            />
            <ContentModule data={HomeInsuranceContentModuleData} columns={2} />
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
            <FillerModule data={HomeFillerModuleData} />
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
            <FaqModule {...HomeInsuranceFaqData} />
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

export default HomeInsurance;
