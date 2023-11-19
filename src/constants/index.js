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
      "I thought it was impossible to make a website as beautiful as our product, but Peter proved me wrong.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Peter does.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "After Peter optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "",
    designation: "",
    company: "",
    image: "",
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
];

const links = [
  {
    link: "https://www.linkedin.com/in/peterdumbari/",
    icon: linkedin,
  },
  {
    link: "https://github.com/Peter-Dumbari",
    icon: github,
  },
];

export { services, technologies, experiences, testimonials, projects, links };
