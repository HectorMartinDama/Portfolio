import type { Experience, Project } from "../types/global";

export const URL_BLOG = "https://blog-hectormartindama.vercel.app/";

export const EXPERIENCE: Experience[] = [{}];

export const PROJECTS: Project[] = [
  {
    title: "Thullo - Manage your boards",
    description:
      "Thullo is an app for real-time board management, which allows you to organize projects and tasks collaboratively.",
    date: "March 15, 2024",
    technologies: [
      "Sveltekit",
      "Auth.js",
      "Express",
      "Domain Driven Desing",
      "Hexagonal Architecture",
      "Event-Drive Architecture",
      "RabbitMQ",
      "Microservices",
      "GraphQL",
    ],
    repository: "https://github.com/HectorMartinDama/Thullo",
    deploy: "http://thullo.app/",
    article: "https://blog-hectormartindama.vercel.app/en/blog/post-1",
    image: {
      src: "projectImages/thullo.webp",
      alt: "Thullo - Manage your boards image",
    },
  },
  {
    title: "Challenges of FrontendMentor",
    description: "Solutions to FrontendMentor challenges.",
    date: "Agust 2, 2024",
    technologies: ["Astro", "Tailwind"],
    deploy: "https://frontendmentor-challenges-solved-page.vercel.app/",
    image: {
      src: "projectImages/frontendmentor.webp",
      alt: "Challenges of FrontendMentor image",
    },
  },
];
