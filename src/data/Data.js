import { Variables } from "../styles/Variables";

export const NavigationData = {
  logo: { src: "/images/cflogo.png", alt: "logo" },
  links: [
    { url: "#", text: "Insurance", external: false },
    { url: "#", text: "Reviews", external: false },
    { url: "#", text: "FAQ", external: false },
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

export const FaqData = {
  headers: {
    heading: "Work with me",
    subheader:
      "My clients are my #1 priority. If you need anything I am here to take care of you throughout the entire process. I understand Insurance can be daunting but I will ensure you will understand everything you are purchasing.",
  },

  questions: [
    {
      question: `How do I get a quote?
        `,
      answer:
        "You can request a detailed estimate for car or home insurance online. For other products, submit an online form, call 866-COUNTRY (866-268-6879) or contact your local rep to get a quote.",
    },
    {
      question: "Who’s there to support me?",
      answer:
        "Your local rep is there to help with anything you need, along with our client support center, which can be reached at 866-COUNTRY (866-268-6879). You can also pay your bill, start a claim, print an insurance card and more through your online account or our mobile app.",
    },
    {
      question: "Will I be pressured to purchase over the phone?",
      answer: `No one likes feeling pressured over the phone to purchase products. Reach out to your local rep directly or call us at 866-COUNTRY (866-268-6879) to start the conversation on your terms.`,
    },
    {
      question: "Why do you talk about insurance and investment products?",
      answer:
        "Protection and planning go hand in hand. Insurance products protect your current and future assets, which includes your financial goals. We’re here to help with both.",
    },
    {
      question: "How does your insurance claims process work?",
      answer:
        "When you file a claim, the unknown can be the hardest part. We work hard to make the process as easy as possible. To get started, file your claim through your online account, our mobile app or by calling 866-COUNTRY (866-268-6879). After that, a claim rep will reach out to explain your options, answer any questions and review your policy. Your claim rep is your main point of contact throughout the process, but your local rep is always there for support.",
    },
  ],
};

export const ContactFormData = {
  title: "Location",
  desc: "Need a website? Talk with a team member for a FREE consultation on the goals of your wesbite.",
  title2: "Contact me for a quote",
  streetAddress: "900 Technology Way Suite 280 Libertyville, IL 60048 ",
  numberInfo: {
    tel: "+8475488591",
    mobileNumber: "(847)-548-8591",
  },
  officeHours: {
    days: "Monday - Saturday",
    hours: "8:00 AM - 6:00 PM",
  },
  socialMedia: {
    socials: [
      { name: "facebook", link: "#", icon: "", alt: "facebook icon" },
      { name: "linkedin", link: "#", icon: "", alt: "linkedin icon" },
    ],
  },
};

export const FooterData = {
  resources: {
    heading: "Resources",
    links: [
      { href: "#services", text: "Services" },
      { href: "#testimonials", text: "Testimonials" },
      { href: "#faqSection", text: "FAQ" },
    ],
  },
  information: {
    heading: "Email",
    links: [
      {
        href: "mailto:michaelmoulis@countryfinanical.com",
        text: "michaelmoulis@countryfinanical.com",
      },
    ],
  },
};
