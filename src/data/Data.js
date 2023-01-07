import { Variables } from "../styles/Variables";

export const NavigationData = {
  logo: { src: "/images/cflogo.png", alt: "logo" },
  links: [
    { url: "#", text: "lorem", external: false },
    { url: "#", text: "ipsum", external: false },
    { url: "#", text: "poop", external: false },
    { url: "#", text: "lorem", external: false },
  ],
  button: { url: "#", text: "contact", label: "jump to contact form" },
};

export const HomeData = {
  homeHero: {
    eyebrow1: "Your favorite insurance agent",
    heading1: "Michael Moulis",
    eyebrow2: "Supported by",
    heading2: `${Variables.companyName}`,
    heroImgSrc: "/images/agent-nobg.png",
    heroImgAlt: "Insurance agent Michael Moulis",
  },
};

export const InsuranceTypesData = {
  headings: {
    heading: "Need insurance coverage? Request a quote!",
    subheader:
      "I offer a wide range of insurance coverages all across Illinois",
  },
  insurances: [
    {
      src: "/icons/car_icon.svg",
      alt: "Car",
      name: "Car",
    },
    {
      src: "/icons/life_icon.svg",
      alt: "Life",
      name: "Life",
    },
    {
      src: "/icons/home_icon.svg",
      alt: "Home",
      name: "Home",
    },
    {
      src: "/icons/business_icon.svg",
      alt: "Hands shaking for business",
      name: "Business",
    },
  ],
};
