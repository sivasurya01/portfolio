import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Zenzpath.png";
import rmtdevImg from "@/public/Realestate.png";
import wordanalyticsImg from "@/public/Ticket.png";

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
    imageUrl: corpcommentImg,
  },
  {
    title: "Realestate",
    description:
      "I was the full-stack developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ticket Management System (PWA)",
    description:
      "Support Ticket Raising with Admin,Client and Employee Panel & Dashboard.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: wordanalyticsImg,
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
