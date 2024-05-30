import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  gigasec,
  budgetapp,
  bookstore,
  hotelhub,
  threejs,
  bootstrap,
  ruby,
  sass,
  linkedin,
  github,
  logo,
  twitter,
  abel,
  hussein,
  okongo,
  currency_app,
  weather_app,
  mail,
  eShop,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ruby on Rails",
    icon: ruby,
  },
  {
    name: "Saas",
    icon: sass,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Intern",
    company_name: "Gigasec",
    icon: gigasec,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Wix Web designer",
    company_name: "Free Lanced",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "June 2022 - Jul 2022",
    points: [
      "Learning and designing websites using Wix with the help of my frontend skills",
      "Finishing the project before the deadline",
      "Meeting all the client requirements",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Self Employed",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Collaborating with students from diverse region across the globe via slack and zoom in learning and building real life projects at Microverse",
      "Learning and implementing the best practices in software development",
      "Working remotely daily with other coding partners to build projects",
      "Completing all the required projects before the end of the week to avoid repeatation of the block (week)",
      ,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Peter for any software development position that may arise. He is undoubtedly a valuable asset to any team. ",
    name: "Abel Morara",
    designation: "Alumn",
    company: "Microverse",
    image: abel,
  },
  {
    testimonial:
      "One of Peter's standout qualities is his remarkable attention to detail. I highly recommend him",
    name: "Hussein Hashi",
    designation: "Alumn",
    company: "Microverse",
    image: hussein,
  },
  {
    testimonial:
      "It is impressive to witness his deep understanding and mastery of React and APIs",
    name: "Okongo Derrick",
    designation: "Alumn",
    company: "Microverse",
    image: okongo,
  },
];

const projects = [
  {
    name: "Hotel Hub",
    description:
      "This is an hotel management application that is managed by the admin and used by customers, were customers can book rooms and admin can manage the rooms and bookings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hotelhub,
    source_code_link:
      "https://github.com/Peter-Dumbari/Final-Capstone-Hotel-Hub",
    live_link: "https://hotel-hub-app.onrender.com/",
  },
  {
    name: "Book Store",
    description:
      "This Application is an online application for saving name of books and their authors, it help you in saving those books for a longer time , with a sweet and wonderful users interface",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link:
      "https://github.com/Peter-Dumbari/Bookstore-Application.git",
    live_link: "https://bookstore-0bao.onrender.com",
  },
  {
    name: "Budget Tracker",
    description:
      "This a web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    tags: [
      {
        name: "Rails",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: budgetapp,
    source_code_link: "https://github.com/Peter-Dumbari/Budget-Application.git",
    live_link: "https://budget-application-wscs.onrender.com/",
  },
  {
    name: "Currency Exchanger",
    description:
      "Currency Exchange app is an application that gives the current exchange rates",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: currency_app,
    source_code_link:
      "https://github.com/Peter-Dumbari/Metrics-Webapp/tree/development",
    live_link: "https://currency-exchange-rates-nrj8.onrender.com/",
  },
  {
    name: "Weather Application",
    description:
      "Weather App gives the current weather condition all round the globe, with the latitude and longitute of that location ",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: weather_app,
    source_code_link: "https://github.com/Peter-Dumbari/weather-application",
    live_link: "https://lworldweather.netlify.app/",
  },

  {
    name: "Tams eShop",
    description:
      "This is an e-commerce site own by Tams Technology where you can buy all your electronics gadgets and accessories.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Rails",
        color: "yellow-text-gradient",
      },
    ],
    image: eShop,
    source_code_link: "https://github.com/Peter-Dumbari/Ecommerce_frontend",
    live_link: "https://tams-mall.onrender.com",
  },
];

const links = [
  {
    link: "https://www.linkedin.com/in/peterdumbari/",
    icon: linkedin,
    name: "linkedIn",
  },
  {
    link: "https://github.com/Peter-Dumbari",
    icon: github,
    name: "github",
  },
  {
    link: "https://twitter.com/PeterDumbari",
    icon: twitter,
    name: "twitter",
  },
  {
    link: "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=peterdumbari08@gmail.com&tf=1",
    icon: mail,
    name: "mail",
  },
];

export { services, technologies, experiences, testimonials, projects, links };
