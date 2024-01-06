import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import zenzpathimg from "@/public/Zenzpath.png";
import realestaeimg from "@/public/Realestate.png";
import ticketimg from "@/public/Ticket.png";
import calculaterimg from "@/public/calculater.png"
import stopwatchimg from "@/public/stop.png"
import usermageimg from "@/public/users.png"
import inputpackageimg from "@/public/inputpackage.png"
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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Nagore,",
    description:
      "I worked as a front-end developer for 2 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Nagore,",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Firebase and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Career Guidence (PWA)",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. It is Benefits Schools Student Searching Collages and Courses.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: zenzpathimg,
    link:""
  },
  {
    title: "Realestate",
    description:
      "I was the full-stack developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind", "Redux"],
    imageUrl: realestaeimg,
    link:""

  },
  {
    title: "Ticket Management System (PWA)",
    description:
      "Support Ticket Raising with Admin,Client and Employee Panel & Dashboard.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: ticketimg,
    link:""

  },
] as const;
export const miniprojectData = [
  {
    title: "Calculator",
    description:
      "My calculator app offers a straightforward solution for performing diverse mathematical calculations, ensuring ease of use.",
    tags: ["React"],
    imageUrl: calculaterimg,
    link:"https://newlive.vercel.app/"
  },
  {
    title: "Stop Watch",
    description:
      "I've developed a stopwatch application for tracking time intervals with precision.",
    tags: ["React", "Tailwind"],
    imageUrl: stopwatchimg,
    link:"https://sivasurya01.github.io/stopwatch/"
  },
  {
    title: "User Management System",
    description:
      "I created a user management system with JWT authentication, providing secure access control and supporting essential operations like edit, delete, and create.",
    tags: ["React", "MongoDB", "Tailwind","Express","Nodejs"],
    imageUrl: usermageimg,
    link:"https://github.com/sivasurya01/MERNStack"
  },
  {
    title: "Customize Input Npm Package",
    description:
      "Support Ticket Raising with Admin,Client and Employee Panel & Dashboard.",
    tags: ["javascript","Nodejs"],
    imageUrl: inputpackageimg,
    link:"https://www.npmjs.com/package/@sivasurya/sivasurya-custom-react-input"
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
  "Redux",
  "Express",
  "Firebase",
  "Bootstrap"
] as const;
