import './global.css';
import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import { HomeData, NavigationData } from './data/Data';

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
            <Navigation backdrop={navBackdrop} data={NavigationData} />
            <Hero
                data={HomeData.homeHero}
                eyebrow1={HomeData.homeHero.eyebrow1}
                heading1={HomeData.homeHero.heading1}
                eyebrow2={HomeData.homeHero.eyebrow2}
                heading2={HomeData.homeHero.heading2}
                heroImgSrc={HomeData.homeHero.heroImgSrc}
                heroImgAlt={HomeData.homeHero.heroImgAlt}
            />
        </>
    );
}

export default App;
