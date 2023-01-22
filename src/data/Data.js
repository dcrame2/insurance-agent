import { Variables } from "../styles/Variables";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGoogle,
  FaTwitter,
  FaLocationArrow,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

export const NavigationData = {
  logo: { src: `${Variables.logoWhite}`, alt: "logo" },
  links: [
    { url: "/car-insurance", text: "Car", external: false },
    { url: "/life-insurance", text: "Life", external: false },
    { url: "/home-insurance", text: "Home", external: false },
    { url: "/business-insurance", text: "Business", external: false },
  ],
  button: { url: "/contact", text: "contact", label: "jump to contact form" },
};

export const HomeData = {
  homeHero: {
    eyebrow1: "Your favorite insurance agent",
    heading1: "Mike",
    heading1Color: " Moulis",
    eyebrow2: "Supported by",
    heading2: `${Variables.companyName}`,
    heroImgSrc: "/images/agent-nobg.png",
    heroImgAlt: "Insurance agent Mike Moulis",
  },
};

export const InsuranceTypesData = {
  headings: {
    heading: "Need insurance coverage? ",
    headingColor: "Request a quote!",
    subheader:
      "I offer a wide range of insurance coverages all across Illinois",
  },
  insurances: [
    {
      src: "/icons/car_icon.svg",
      alt: "Car",
      name: "Car",
      url: "/car-insurance",
    },
    {
      src: "/icons/life_icon.svg",
      alt: "Life",
      name: "Life",
      url: "/life-insurance",
    },
    {
      src: "/icons/home_icon.svg",
      alt: "Home",
      name: "Home",
      url: "/home-insurance",
    },
    {
      src: "/icons/business_icon.svg",
      alt: "Hands shaking for business",
      name: "Business",
      url: "/business-insurance",
    },
  ],
};

export const HomePageFaqData = {
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
  // contactDetails: [
  //   {
  //     icon: <FaLocationArrow />,
  //     subheader: "Address",
  //     content: "900 Technology Way Suite 280 Libertyville, IL 60048",
  //   },
  //   {
  //     icon: <FaPhoneAlt />,
  //     subheader: "Phone",
  //     content: "(847)-548-8591",
  //   },
  //   {
  //     icon: <FaMailBulk />,
  //     subheader: "Email",
  //     content: "mike.moulis@countryfinancial.com",
  //   },
  // ],

  title: "Location",
  desc: "Need a website? Talk with a team member for a FREE consultation on the goals of your wesbite.",
  title2: "Contact ",
  streetAddress: "900 Technology Way Suite 280 Libertyville, IL 60048 ",
  numberInfo: {
    tel: "+8475488591",
    mobileNumber: "(847)-548-8591",
  },
  officeHours: {
    days: "Monday - Saturday",
    hours: "8:00 AM - 6:00 PM",
  },
  image: "/images/mike_easter.jpeg",
  socialMedia: {
    socials: [
      {
        name: "facebook",
        link: "https://www.facebook.com/mikey.moulis",
        icon: <FaFacebookSquare />,
        alt: "facebook icon",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mike-moulis-59394b129/",
        icon: <FaLinkedin />,
        alt: "linkedin icon",
      },
      {
        name: "google business",
        link: "https://www.google.com/search?q=Mike+Moulis+-+COUNTRY+Financial+representative&oq=mike&aqs=chrome.1.69i57j69i59l2j46i433i512l2j69i61l3.2834j0j1&sourceid=chrome&ie=UTF-8",
        icon: <FaGoogle />,
        alt: "google business icon",
      },
    ],
  },
};

export const ReviewsData = {
  heading: "Reviews",
  // subheading: `Testimonials from ${Variables.companyName} customers`,
  testimonials: [
    {
      name: "Dominique Woodard",
      content: `Mike is very knowledgeable and patient. I have car and homeowners insurance with him.`,
    },
    {
      name: "Randy Brooks",
      content: `Very nice working with  Mike! He suggested a couple of was to keep my great home owners covering and still save a few dollars as well. Thanks Mike for your help and professionalism!`,
    },
    {
      name: "Brandon O'Connor",
      content: `Mike was incredible easy to work with! He answered all of my questions thoroughly and provided a great customer experience. Thankful to have him as my point of contact.`,
    },
    {
      name: "Joey Mende",
      content: `I had a lot of questions about different home insurance coverages and mike answered them all. I feel like I was able to make the best decision for me. You won’t regret working with him!
      Thanks Mike!!!`,
    },
    {
      name: "Sam An",
      content: `Real painless experience. Couldn't believe how much money I was saving while getting better coverage!`,
    },
  ],

  button: {
    text: "Read More on Google",
    ariaLabel: "Google Reviews",
    href: "https://www.google.com/search?q=Mike+Moulis+-+COUNTRY+Financial+representative&oq=mike&aqs=chrome.1.69i57j69i59l2j46i433i512l2j69i61l3.2834j0j1&sourceid=chrome&ie=UTF-8",
    target: "_blank",
    aTag: true,
  },
};

export const ContactBarData = {
  header: "Contact me for more information!",
  button: { url: "/contact", text: "contact", label: "jump to contact form" },
};

export const FooterData = {
  resources: {
    heading: "Insurances",
    links: [
      { href: "/car-insurance", text: "Car" },
      { href: "/life-insurance", text: "Life" },
      { href: "/home-insurance", text: "Home" },
      { href: "/business-insurance", text: "Business" },
    ],
  },
  information: {
    heading: "Information",
    links: [
      {
        href: "mailto:mike.moulis@countryfinanical.com",
        text: "mike.moulis@countryfinanical.com",
      },
      {
        href: "tel:8479039641",
        text: "(847) 903-9641",
      },
    ],
  },
  socialMedia: {
    heading: "",
    links: [
      {
        icon: <FaFacebookSquare />,
        href: "https://www.facebook.com/mikey.moulis",
      },
      {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/mike-moulis-59394b129/",
      },
      {
        icon: <FaGoogle />,
        href: "https://www.google.com/search?q=Mike+Moulis+-+COUNTRY+Financial+representative&oq=mike&aqs=chrome.1.69i57j69i59l2j46i433i512l2j69i61l3.2834j0j1&sourceid=chrome&ie=UTF-8",
      },
      // {
      //   icon: <FaTwitter />,
      //   href: "https://www.twitter.com",
      // },
    ],
  },
};

// HOME INSURANCE PAGE DATA
export const HomeInsuranceICMData = {
  contentModule: {
    heading: "Home Insurance",
    content:
      "Safeguarding Your Home and Belongings with Comprehensive Coverage",
    id: "homeInsurance",
    src: "/images/home.jpeg",
    alt: "home insurance",
  },
};

export const HomeInsuranceFaqData = {
  headers: {
    heading: "Home Insurance FAQs",
    subheader: "Navigating Home Insurance",
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

// CAR INSURANCE PAGE DATA
export const CarInsuranceICMData = {
  contentModule: {
    heading: "Car Insurance",
    content: "Protection for Your Vehicle and Peace of Mind on the Road",
    id: "carInsurance",
    src: "/images/car.jpg",
    alt: "car insurance",
  },
};

export const CarInsuranceFaqData = {
  headers: {
    heading: "Car Insurance FAQs",
    subheader: "Unlocking the Mystery of Car Insurance",
  },

  questions: [
    {
      question: `How does car insurance work?
        `,
      answer:
        "In general, you pay your insurance company and in return, you get protection for damages caused to, or with, your car. Car insurance also protects you from accidents caused by other drivers with little or no insurance. That protection is outlined in your auto insurance policy.",
    },
    {
      question: "What are my coverage options?",
      answer:
        "We offer car insurance coverage with several additional features, so you can customize your protection to your needs. Our coverages page gives you an idea of the types of protection an auto policy can provide.",
    },
    {
      question: "How can I save on car insurance?",
      answer: `You could save money with a home and auto insurance bundle. Purchase another policy (like life or home) to get an insurance discount.`,
    },
    {
      question: "What do I need to know about auto insurance claims?",
      answer: "We’re with you every step of the way.",
    },
  ],
};

export const CarInsuranceContentModuleData = {
  content1: `<p>Car insurance is a contract between you and an insurance company in which you pay a premium and the insurance company agrees to pay for certain types of financial losses in the event of an accident or theft.</p><p>The most common types of car insurance are liability, collision, and comprehensive coverage. Liability coverage is required by law and covers damages or injuries that you may cause to another person or their property while operating your vehicle.</p>`,
  content2:
    "<p>Collision coverage pays for damages to your own vehicle in the event of an accident. Comprehensive coverage pays for non-collision damages such as theft, fire, or natural disasters. Other types of car insurance may include personal injury protection, uninsured motorist coverage, and more.</br>",
};

export const CarInsuranceListContentModule = {
  listItems: [
    `Financial protection: In the event of an accident or other incident involving your vehicle, car insurance can help cover the cost of repairs or replacement, as well as any medical expenses for yourself or others involved.`,
    `Legal requirement: Many states require that drivers have car insurance in order to legally operate a vehicle. Not having insurance could result in fines or even legal trouble.`,
    `Peace of mind: Knowing that you have car insurance can provide peace of mind and help you feel more secure on the road.`,
    `Discounts: Many insurance companies offer discounts for safe drivers, multiple cars, and more.`,
    `Customizable coverage: You can choose the coverage that best suits your needs and budget, whether you are looking for liability, collision, or comprehensive coverage.`,
  ],
};

// LIFE INSURANCE PAGE DATA
export const LifeInsuranceICMData = {
  contentModule: {
    heading: "Life Insurance",
    content: "Securing Your Family's Future with Comprehensive Life Coverage",
    id: "lifeInsurance",
    src: "/images/life.jpg",
    alt: "life insurance",
  },
};

export const LifeInsuranceFaqData = {
  headers: {
    heading: "Life Insurance FAQs",
    subheader: "Understanding Your Life Coverage Options",
  },

  questions: [
    {
      question: `How does life insurance work?
        `,
      answer:
        "In general, you pay your insurance company a premium and in return, get financial protection for your beneficiaries if you were to die during the term specified in your policy. You can choose between term life insurance (coverage for a specific amount of time) or permanent life insurance (lifetime coverage). ",
    },
    {
      question: "How do I know if I need term or permanent life insurance?",
      answer:
        "It depends on your situation. An easy way to think about the difference is to compare them to the idea of renting or owning a home. Term life insurance would be 'renting' and permanent life insurance would be 'owning.'",
    },
    {
      question: "How much life insurance do I need?",
      answer: `The amount of life insurance you need depends on several things, like the number of children you have, your mortgage, income and more.`,
    },
    {
      question: "What types of life insurance are there?",
      answer:
        "The three most popular types of life insurance are term, whole and universal. Term life provides protection for a specified period of time (like 10, 20 or 30 years) and is typically very affordable when you’re younger. Whole life and universal life policies provide permanent coverage as long as premiums are paid. They typically have higher premiums than term life but also build cash value that can help with things like providing emergency funds or an estate for your family later in life.",
    },
  ],
};

export const LifeInsuranceContentModuleData = {
  content1: `<p>Life insurance is a contract between an individual and an insurance company in which the individual pays a premium and the insurance company agrees to pay a designated beneficiary a sum of money upon the individual's death. There are two main types of life insurance: term life insurance and permanent life insurance.</p><p>Term life insurance provides coverage for a specific period of time, such as 20 or 30 years. If the insured individual dies within this period, the death benefit is paid to the designated beneficiary. If the individual does not die within the term, the contract expires with no value.</p>`,
  content2: `<p>Permanent life insurance, such as whole life insurance or universal life insurance, provides coverage for the individual's entire lifetime. Premiums are typically higher than term life insurance, but the policy's cash value component builds over time. This component can be borrowed against or used to pay premiums.</p><p>Both types of life insurance are designed to provide financial support for the insured's beneficiaries in the event of their death. The death benefit can be used to cover expenses such as funeral costs, outstanding debts, and living expenses.</p>`,
};

// BUSINESS INSURANCE PAGE DATA
export const BusinessInsuranceICMData = {
  contentModule: {
    heading: "Business Insurance",
    content:
      "Protecting Your Business from the Unexpected with Tailored Insurance Solutions",
    id: "businessInsurance",
    src: "/images/business.jpg",
    alt: "Business insurance",
  },
};

export const HomePageStatsData = {
  stats: [
    {
      symbol: "$",
      dataTarget: "200",
      heading: "saved on average for car insurance",
    },
    {
      symbol: "$",
      dataTarget: "150",
      heading: "saved on average for life insurance",
    },
    {
      symbol: "$",
      dataTarget: "600",
      heading: "saved on average for home insurance",
    },
    {
      symbol: "$",
      dataTarget: "2500",
      heading: "saved on average for business insurance",
    },
  ],
};

export const BusinessInsuranceFaqData = {
  headers: {
    heading: "Business Insurance FAQs",
    subheader: "Securing Your Business",
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
