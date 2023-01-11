import './global.css';
import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import InsuranceTypes from './components/InsuranceTypes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
    HomeData,
    NavigationData,
    InsuranceTypesData,
    FaqData,
    ContactFormData,
    FooterData,
} from './data/Data';
import FaqModule from './components/FaqModule';
import Spacer from './sub_components/Spacer';
import { Variables } from './styles/Variables';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BusinessInsurance from './pages/BusinessInsurance';
import HomeInsurance from './pages/HomeInsurance';
import LifeInsurance from './pages/LifeInsurance';
import CarInsurance from './pages/CarInsurance';

function App() {
    const [navBackdrop, setNavBackdrop] = useState(false);
    const [scrollY, setScrollY] = useState();

    const scrollListener = () => {
        window.onscroll = function (e) {
            setScrollY(this.scrollY);
            // Nav functionality
            if (this.scrollY > 83) {
                setNavBackdrop(true);
            } else {
                setNavBackdrop(false);
            }
        };
    };

    scrollListener();
    return (
        <>
            <Router>
                <Navigation backdrop={navBackdrop} data={NavigationData} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/car-insurance' element={<CarInsurance />} />
                    <Route path='/life-insurance' element={<LifeInsurance />} />
                    <Route path='/home-insurance' element={<HomeInsurance />} />
                    <Route
                        path='/business-insurance'
                        element={<BusinessInsurance />}
                    />
                    <Route
                        path='/contact'
                        element={<Contact data={ContactFormData} />}
                    />
                </Routes>
                <Footer data={FooterData} />
            </Router>
        </>
    );
}

export default App;
