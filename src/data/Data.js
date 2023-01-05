import { Variables } from '../styles/Variables';

export const NavigationData = {
    logo: { src: '/images/cflogo.png', alt: 'logo' },
    links: [
        { url: '#', text: 'lorem', external: false },
        { url: '#', text: 'ipsum', external: false },
        { url: '#', text: 'poop', external: false },
        { url: '#', text: 'lorem', external: false },
    ],
    button: { url: '#', text: 'contact', label: 'jump to contact form' },
};

export const HomeData = {
    homeHero: {
        eyebrow1: 'Your favorite insurance agent',
        heading1: 'Michael Moulis',
        eyebrow2: 'Supported by',
        heading2: `${Variables.companyName}`,
        heroImgSrc: '/images/agent-nobg.png',
        heroImgAlt: 'Insurance agent Michael Moulis',
    },
};
