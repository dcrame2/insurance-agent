import React from 'react';
import { Variables } from '../styles/Variables';
import {
    LifeInsuranceFaqData,
    LifeInsuranceICMData,
    ContactBarData,
    LifeInsuranceContentModuleData,
    LifeFillerModuleData,
} from '../data/Data';
import ImageContentModule from '../components/ImageContentModule';
import Spacer from '../sub_components/Spacer';
import FaqModule from '../components/FaqModule';
import ContactBarModule from '../components/ContactBarModule';
import ContentModule from '../components/ContentModule';
import FillerModule from '../components/FillerModule';

const LifeInsurance = () => {
    return (
        <>
            <ImageContentModule
                imgPlacement='right'
                {...LifeInsuranceICMData}
            />
            <Spacer
                color={Variables.primaryColor2}
                desktop={100}
                tablet={80}
                mobile={80}
            />
            <ContentModule data={LifeInsuranceContentModuleData} columns={2} />
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
            <FillerModule data={LifeFillerModuleData} />
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
            <FaqModule {...LifeInsuranceFaqData} />
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

export default LifeInsurance;
