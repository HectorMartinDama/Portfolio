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
    repository: "",
    deploy: "http://thullo.app/",
    article: "https://blog-hectormartindama.vercel.app/en/blog/post-1",
    image: {
      src: "projectImages/thullo.webp",
      alt: "",
    },
  },
];
