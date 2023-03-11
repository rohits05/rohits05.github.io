import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  reactjs,
  redux,
  meta,
  carrent,
  tripguide,
  amazon,
  react,
  htbf,
  pb,
  llb, pkd,  xio, name, open
  } from "../assets";
import Earth from "../components/canvas/Earth";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    // {
    //   id: "tech",
    //   title: "Resume",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Cloud & Blockchain Neophyte",
      icon:  backend,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "DSA Virtuoso",
      icon: mobile,
    },
    {
      title: "AWS Certified Practitioner",
      icon: amazon,
    },
    {
      title: "HackerCup '22 Qualifier",
      icon: meta,
    },
    {
      title: "Hacktoberfest '22 Contributor",
      icon: htbf,
    },
    {
      title: "Competitive Programmer",
      icon: redux,
    },
    {
      title: "Adventurous Soul",
      icon:  tripguide,
    },
  ];
  
  const technologies = [
    // {
    //   name: "JAVA",
    //   icon: java,
    // },
    // {
    //   name: "TS",
    //   icon: typescript,
    // },
    // {
    //   name: "Cpp",
    //   icon: cpp,
    // },
    // {
    //   name: "Three Cloud",
    //   icon: py,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Express JS",
    //   icon: express,
    // },
    // {
    //   name: "React JS",
    //   icon: react,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "Firebase",
    //   icon: firebase,
    // },
    // {
    //   name: "MYSQL",
    //   icon: mysql,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Vite",
    //   icon: vite,
    // },
    // {
    //   name: "Chakra UI",
    //   icon: chakra,
    // },
    // {
    //   name: "Github",
    //   icon: github,
    // },
    // {
    //   name: "Three Cloud",
    //   icon: cloud,
    // },
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "LetsGrowMore",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jun '22 - Jul '22",
      points: [
        "Build Stock Market Prediction system, Image to Sketch Converter, and Iris Flower classification Machine Learning projects.",
        "Implemented using famous python libraries: Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn etc.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "LetsGrowMore",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Apr '22 - May '22",
      points: [
        "Designed an updatable To-Do List with a fresh UI look..",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Made an animated calculator using vanilla JS with 3D glass-morphism property",
      ],
    },
    {
      title: "Campus Ambassador",
      company_name: "PrepBytes",
      icon: creator,
      iconBg: "#151030",
      date: "Sep '21 - Dec '21",
      points: [
        "Conducted events about team leadership and competitive strategies. ",
        "Also hosted a coding competition event to spread awareness of coding culture.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mi Store Clone",
      description:
        "Cloned Xiaomi's official store web app using React-JS. Used Carousel to highlight the top products in trends. Implemented a fast and intuitive interface to browse products.",
      tags: [
        {
          name: "react-js",
          color: "blue-text-gradient",
        },
        {
          name: "router-v6",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
        {
          name: "carousel",
          color: "blue-text-gradient",
        },
      ],
      image: xio,
      source_code_link: "https://github.com/rohits05/MI-Store",
    },
    {
      name: "Dall-e 2.0",
      description:
        "An AI MERN app that can generate stunning images and designs using OpenAI’s Dall-e model.Used modernized tech stacks like OpenAI API, Cloudinary, Axios, and Cors, etc.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "green-text-gradient",
        },
        {
          name: "open-ai",
          color: "pink-text-gradient",
        },
        {
          name: "cloudinary",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: open,
      source_code_link: "https://github.com/rohits05/Dall-e-2.0",
    },
    {
      name: "Code-Help",
      description:
        "Build a course learner start-up web app inspired by code-help. Integrated redux-toolkit, sass with powerful Chakra-UI. Used react framer motion and carousel.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "green-text-gradient",
        },
        {
          name: "autoprefixer",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: llb,
      source_code_link: "https://github.com/rohits05/Code-Help",
    },
    {
      name: "PokeDex",
      description:
        "An application where you can search for your treasured Pokemon and get awesome stuff about it.Implemented the concepts of React-Hooks into it with a minimalistic TypeScript UI look.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "api-calling",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        // {
        //   name: "hooks",
        //   color: "green-text-gradient",
        // },
      ],
      image: pkd,
      source_code_link: "https://github.com/rohits05/PokeDex-Application",
    },
    // {
    //   name: "Name-It",
    //   description:
    //     "This application suggests a variety of names possible on the basis of your given name. It's overall flex UI look is made using Tailwind CSS. Implemented the concepts of React-Hooks into it.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tailwind-css",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "react-hooks",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "redux",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "api's",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: name,
    //   source_code_link: "https://github.com/rohits05/Name-It-Application",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };