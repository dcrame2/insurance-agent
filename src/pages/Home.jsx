import React from 'react';
import Hero from '../components/Hero';
import InsuranceTypes from '../components/InsuranceTypes';
import FaqModule from '../components/FaqModule';
import {
    HomeData,
    InsuranceTypesData,
    HomePageFaqData,
    ContactBarData,
} from '../data/Data';
import Spacer from '../sub_components/Spacer';
import { Variables } from '../styles/Variables';
import ContactBarModule from '../components/ContactBarModule';

const Home = () => {
    return (
        <>
            <Hero data={HomeData} />
            <Spacer
                color={Variables.secondaryColor}
                desktop={124}
                tablet={100}
                mobile={50}
            />
            <InsuranceTypes data={InsuranceTypesData} />
            <Spacer
                color={Variables.secondaryColor}
                desktop={124}
                tablet={100}
                mobile={50}
            />
            <Spacer
                shadowToggle='true'
                color={Variables.primaryColor2}
                desktop={64}
                tablet={120}
                mobile={100}
            />
            <FaqModule {...HomePageFaqData} />
            <Spacer
                shadowToggle='true'
                color={Variables.primaryColor2}
                desktop={64}
                tablet={120}
                mobile={100}
            />
            <ContactBarModule data={ContactBarData} />
        </>
    );
};

export default Home;
