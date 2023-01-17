import React from 'react';
import { Variables } from '../styles/Variables';
import {
    CarInsuranceFaqData,
    CarInsuranceICMData,
    ContactBarData,
} from '../data/Data';
import ImageContentModule from '../components/ImageContentModule';
import Spacer from '../sub_components/Spacer';
import FaqModule from '../components/FaqModule';
import ContactBarModule from '../components/ContactBarModule';
import Content from '../components/Content';

const CarInsurance = () => {
    return (
        <>
            <ImageContentModule imgPlacement='right' {...CarInsuranceICMData} />
            <Spacer
                color={Variables.primaryColor2}
                desktop={80}
                tablet={60}
                mobile={40}
            />
            <Content data={'test'} />
            <Spacer
                color={Variables.primaryColor2}
                desktop={244}
                tablet={120}
                mobile={100}
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
