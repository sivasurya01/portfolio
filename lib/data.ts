import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import zenzpathimg from "@/public/Zenzpath.png";
import realestaeimg from "@/public/Realestate.png";
import ticketimg from "@/public/Ticket.png";
import trainingimg from "@/public/Training-Management-System.svg";
import weatherimg from "@/public/weatherapp.png";
import calculaterimg from "@/public/calculater.png";
import stopwatchimg from "@/public/stop.png";
import usermageimg from "@/public/users.png";
import employeemageimg from "@/public/employee-management-image.png";
import quizimg from "@/public/quizapp.png";
import formimg from "@/public/formapp.png";
import inputpackageimg from "@/public/inputpackage.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated E.G.S Pillay Engineering Collage",
    location: "Nagapattinum,",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End (React) Developer",
    location: "Nagore,",
    description:
      "I worked as a front-end developer for 6 months. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Nagore,",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Firebase and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - 07/2024",
  },
] as const;

export const projectsData = [
  {
    title: "Career Guidence (PWA)",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. It is Benefits Schools Student Searching Collages and Courses.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: zenzpathimg,
    link: "",
  },
  {
    title: "Realestate",
    description:
      "I was the full-stack developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind", "Redux"],
    imageUrl: realestaeimg,
    link: "",
  },
  {
    title: "Ticket Management System (PWA)",
    description:
      "Support Ticket Raising with Admin,Client and Employee Panel & Dashboard.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: ticketimg,
    link: "",
  },
  {
    title: "Training Management System",
    description:
      "I'm developing a project management system focused on Course administration and HR/payroll functions.",
    tags: ["React", "Redux", "Firebase", "Bootstrap"],
    imageUrl: trainingimg,
    link: "",
  },
] as const;
export const miniprojectData = [
  {
    title: "User Management System",
    description:
      "I created a user management system with JWT authentication, providing secure access control and supporting essential operations like edit, delete, and create.",
    tags: ["React", "MongoDB", "Tailwind", "Express", "Nodejs"],
    imageUrl: usermageimg,
    link: "https://sivausers-management-system.vercel.app/",
  },
  {
    title: "Employee Management System",
    description:
      "I created a employee management system with supporting essential operations like edit, delete, and create.",
    tags: ["React", "MySql", "Bootstrap", "Express", "Nodejs"],
    imageUrl: employeemageimg,
    link: "https://siva-employee-management-system.vercel.app/",
  },
  {
    title: "Customize Input Npm Package",
    description: "I created an npm package for React or Next.js projects.",
    tags: ["javascript", "Nodejs"],
    imageUrl: inputpackageimg,
    link: "https://www.npmjs.com/package/@sivasurya/sivasurya-custom-react-input",
  },
  {
    title: "Quiz App",
    description:
      "I've designed a versatile quiz app featuring three distinct formats: multiple-choice, true or false, and multiple-choice with multiple answers. The app also includes a preview option and functions for encrypting and decrypting answers, ensuring a secure and user-friendly experience.",
    tags: ["React", "Bootstrap"],
    imageUrl: quizimg,
    link: "https://quizcreationapp.netlify.app/",
  },
  {
    title: "Form Creation App",
    description:
      "Create dynamic forms effortlessly with our intuitive form builder, featuring a variety of input fields like text, radio, and checkboxes, along with drag-and-drop functionality and a live preview option. Design, customize, and preview your forms seamlessly for a streamlined experience.",
    tags: ["React", "Bootstrap"],
    imageUrl: formimg,
    link: "https://formcreateapp.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "I'm crafting a user-friendly weather app where users simply input a city name and click 'search' to retrieve detailed weather information effortlessly.",
    tags: ["React", "Bootstrap"],
    imageUrl: weatherimg,
    link: "https://weathergetapp.vercel.app/",
  },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Git Hub",
  "Tailwind",
  "MongoDB",
  "MySql",
  "Redux",
  "Express",
  "Firebase",
  "Bootstrap",
] as const;
