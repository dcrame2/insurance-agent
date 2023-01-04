import './global.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import { HomeData } from './data/HomeData';

function App() {
    return (
        <section>
            <Navigation />
            <Hero
                eyebrow1={HomeData.homeHero.eyebrow1}
                heading1={HomeData.homeHero.heading1}
                eyebrow2={HomeData.homeHero.eyebrow2}
                heading2={HomeData.homeHero.heading2}
                heroImgSrc={HomeData.homeHero.heroImgSrc}
                heroImgAlt={HomeData.homeHero.heroImgAlt}
            />
        </section>
    );
}

export default App;
