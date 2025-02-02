import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  shadcn,
  nodejs,
  mongodb,
  hacklab,
  legitbyte,
  blurg,
  nextjs,
  vuejs,
  job_finder,
  mern_ecommerce,
  nextjs_career_intervieW_platform,
  mern_memories,
  React_Collaboration,
  mern_website,
  react_ecommerce,
  React_Movie_Database,
  react_video_stream,
  react_quiz,
  movie_web,
  nextjs_dashboard,
  nextjs_blog,
  nextjs_recipe,
  react_weather
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "Shadcn UI",
    icon: shadcn,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
];

const experiences = [

  {
    title: "Software Develoepr(Front End)",
    company_name: "Hacklab Solutions Private Limited",
    icon: hacklab,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Collaborated with UX/UI designers to implement engaging and intuitive user interfaces.",
      "Developed and maintained responsive web applications using React.js and TypeScript, ensuring cross-browser compatibility.",
      "Conducted code reviews, providing constructive feedback to enhance team performance and ensure clean code practices.",
      "Optimized applications for speed and scalability through performance enhancements and attention to detail.",
      "Troubleshot and debugged applications to improve reliability and user experience.",
      "Participated in agile development processes, including sprint planning and daily stand-ups."
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "LegitBytes,Cyberio Systems, Mohali (WFH)",
    icon: legitbyte,
    iconBg: "#E6DEDD",
    date: "Feb 2023 – July 2023",
    points: [
      "Developed CHAT GPT 4.0 from scratch(NextJS,Typescript,Tailwindcss).",
      "Collaborated with stakeholders to manage development timelines and deliver successful projects.",
      "Improved application reliability through rigorous testing and debugging processes."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Blurgs Innovation Ltd, Bengaluru (WFH)",
    icon: blurg,
    iconBg: "#383E56",
    date: "Jan 2022 – Apr 2022",
    points: [
      "Adding new functionality to current deployed project like Drag & Drop multiple files upload.",
      "Integrate payment portal using Razorpay,Stripe.",
      "Create documentation related to Angular & Django",
      "Collaborating to other members ensure good quality work."
    ],
  },
];


const projectsData = {
  projects :
  [
    {
      name: "NextJS 15 Career AI Platform",
      description: "NextJS 15 Career AI Platform using Next.js, Shadcn UI, Postgres, Gemini AI, Neon DB, Prisma.",
      tags: [
        { name: "nextjs-15", color: "blue-text-gradient" },
        { name: "gemini-ai", color: "blue-text-gradient" },
        { name: "shadcn-ui", color: "green-text-gradient" },
        { name: "neon-db", color: "green-text-gradient" },
        { name: "prisma", color: "pink-text-gradient" }
      ],
      image: nextjs_career_intervieW_platform,
      source_code_link: "https://nextjs15-career-coach-platform.vercel.app"
    },
    {
      name: "MERN Ecommerce App",
      description:
        "MERN Ecommerce using React,Node,Express,Mongodb,Stripe Payment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mern_ecommerce,
      source_code_link: "https://mern-ecomm-app.netlify.app/",
    },
  
    {
      name: "ReactJS Job Finder",
      description:
        "Reactjs job finder web application using reactjs,tailwindcss.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: job_finder,
      source_code_link: "https://mern-job-finder.netlify.app/",
    },
    {
      name: "React Collaboration App",
      description:
        "Real Time Collaboration app using React,Node,Socket-Io.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: React_Collaboration,
      source_code_link: "https://realtime-code-collaboration-app.netlify.app/",
    },
    {
      name: "MERN Website App",
      description:
        "MERN Website app using React,Node,Express,Mongodb.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: mern_website,
      source_code_link: "https://mern-website-app.herokuapp.com/",
    },
  
  
    {
      name: "ReactJS Ecommerce",
      description:
        "React Ecommerce App using React,Hooks,Fake product list api, okta authentication..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "green-text-gradient",
        },
        {
          name: "fakeproductapi",
          color: "pink-text-gradient",
        },
      ],
      image: react_ecommerce,
      source_code_link: "https://react-ecommerce-web-app-2023.netlify.app/",
    },
    {
      name: "React Movie Search App",
      description:
        "React Movie Search App using React,Tmdb api..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tmdb api",
          color: "green-text-gradient",
        },
      ],
      image: React_Movie_Database,
      source_code_link: "https://react-movie-list.netlify.app/",
    },
    {
      name: "React Video Stream App",
      description:
        "React Video Stream App using React,WebRTC..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "webrtc",
          color: "green-text-gradient",
        },
      ],
      image: react_video_stream,
      source_code_link: "https://react-movie-list.netlify.app/",
    },
    {
      name: "React Quiz App",
      description:
        "React Quiz App using React,Hooks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "green-text-gradient",
        },
      ],
      image: react_quiz,
      source_code_link: "https://react-quiz-game-app.netlify.app/",
    },
  
    {
      name: "React Weather App",
      description: "React Weather App using React, Hooks, OpenWeather API.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "openapi", color: "green-text-gradient" } 
      ],
      image: react_weather,
      source_code_link: "https://weather-app-live.netlify.app/"
    },
  
    {
      name: "NextJS Blog App",
      description:
        "NextJS Blog App using NextJS,Tailwindcss,Mongodb,Prisma..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        }
      ],
      image: nextjs_blog,
      source_code_link: "https://github.com/deepakkumar9470/next-blog-app-2023/",
    },
  
    {
      name: "Nextjs Movie Streaming App",
      description:
        "Nextjs Movie Streaming App using Nextjs,Tailwindcss,movieapi...",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "movieapi",
          color: "pink-text-gradient",
        }
      ],
      image: movie_web,
      source_code_link: "https://nextjs-movie-pi.vercel.app/",
    },
  
    {
      name: "Nextjs Dashboard App",
      description:
        "Nextjs Dashboard App using Nextjs,Tailwindcss,fake user json data.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "fakeuser",
          color: "pink-text-gradient",
        }
      ],
      image: nextjs_dashboard,
      source_code_link: "https://next-dashboard-app.netlify.app/",
    },
  
    {
      name: "Next.js Recipe Search App",
      description: "Next.js Recipe Search App using Next.js, TailwindCSS, Edamam Recipe API.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "tailwindcss", color: "green-text-gradient" },
        { name: "edamam-api", color: "pink-text-gradient" } // ✅ Fixed incorrect spelling
      ],
      image: nextjs_recipe,
      source_code_link: "https://nextjs-food-search.vercel.app/"
    },
  
  ]
}

export { services, technologies, experiences, projectsData };