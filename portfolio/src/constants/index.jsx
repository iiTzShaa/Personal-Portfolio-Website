import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";


import MaintControl from "../assets/MaintControl.png";
import MVP from "../assets/MVP.jpg";
import docker from "../assets/docker.png";
import bot from "../assets/bot.png";
import bank from "../assets/bank.jpeg";
import spotify from "../assets/spotify.jpg";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiJava  } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGit } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiGithubactions } from "react-icons/si"; 
import { SiJenkins } from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHARON SHIMON",
  greet: "Hello there! 👋🏻",
  description:
  "I’m a passionate software developer and computer science student with a love for solving complex problems. I thrive on creating efficient solutions, diving into DevOps, and exploring the latest in cloud engineering and backend development. When I’m not coding, I’m probably debugging my life choices!"
};

export const PROJECTS = [
  {
    id: 1,
    name: "NBA-MVP Prediction",
    description:
      "Machine learning project predicting NBA MVP winners from 1991 to 2023 using player statistics and advanced modeling techniques.",
    image: MVP, // Replace with your actual image reference
    githubLink: "https://github.com/iiTzShaa/NBA-MVP-prediction", 
  },
  {
    id: 2,
    name: "MaintControl",
    description:
    "A full-stack web application designed to streamline maintenance operations, utilizing React for the front end, Node.js/Express for the back end, and MongoDB for real-time data updates.",
    image: MaintControl, // Replace with your actual image reference
    githubLink: "https://github.com/iiTzShaa/MaintControl", // Replace with actual link
  },
  {
    id: 3,
    name: "Episode Tracker Bot",
    description:
      "A Telegram bot to track and notify users about new anime episode releases, checking for updates daily.",
    image: bot, // Replace with your actual image reference
    githubLink: "https://github.com/iiTzShaa/EpisodeTrackerBot", // Replace with actual link
  },
  {
    id: 4,
    name: "Docker-React",
    description:
      "Dockerized React app with a fully automated CI/CD pipeline using GitHub Actions for building, testing, and deployment on AWS EBS.",
    image: docker, // Replace with your actual image reference
    githubLink: "https://github.com/iiTzShaa/docker-react", // Replace with actual link
  },
  {
    id: 5,
    name: "Banking Management System",
    description:
      "A C# WinForms application built during an Object-Oriented Programming course, showcasing core OOP principles.",
    image: bank, // Replace with your actual image reference
    githubLink: "https://github.com/iiTzShaa/Banking-Management", // Replace with actual link
  },
  {
    id: 6,
    name: "Spotify Time Machine",
    description:
      "A Python project using Spotipy to create Spotify playlists from Billboard Hot 100 charts for any selected year.",
    image: spotify, // Replace with your actual image reference
    githubLink: "https://github.com/iiTzShaa/Spotify-Time-Machine", // Replace with actual link
  },
];


export const BIO = [
  "I’m Sharon Shimon, a 3rd-year Computer Science student at the Holon Institute of Technology (HIT). I’m passionate about machine learning, data science, software engineering, and DevOps, and I thrive on projects that challenge me to think analytically and find practical solutions.",
  "In 2023, I dove into full-stack web development, DevOps, and machine learning. I’ve worked with technologies like Node.js, React, Kubernetes, and AWS, and I’ve gained hands-on experience with Docker, CI/CD pipelines, and cloud infrastructure. My goal? To build scalable, efficient systems that make an impact.",
  "As a multi-disciplinary software engineer, I’m constantly learning and growing. Whether it’s fine-tuning backend systems or automating DevOps processes, I bring a versatile skill set to every project. From Python and JavaScript to TypeScript and Kubernetes, I’m ready to tackle anything that comes my way.",
  "I’m actively looking for opportunities to level up my career, secure an internship, and dive into real-world software engineering, DevOps, or cloud computing projects. I’m also open to collaborating on exciting machine learning or backend development projects that push boundaries.",
  "If you want someone who’s passionate, driven, and always up for a challenge, let’s talk. I’m ready to make an impact—and have some fun while doing it!"
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <SiRedux className="text-4xl text-indigo-600 lg:text-5xl" />, // Redux icon
    name: "Redux",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-500 lg:text-5xl" />, // Express icon
    name: "Express.js",
  },
  {
    icon: <SiPython className="text-4xl text-blue-500 lg:text-5xl" />, // Python icon
    name: "Python",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />, // JavaScript icon
    name: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-600 lg:text-5xl" />, // TypeScript icon
    name: "TypeScript",
  },
  {
    icon: <DiJava  className="text-4xl text-red-600 lg:text-5xl" />, // Java icon
    name: "Java",
  },
  {
    icon: <SiHtml5 className="text-4xl text-orange-600 lg:text-5xl" />, // HTML icon
    name: "HTML",
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-500 lg:text-5xl" />, // CSS icon
    name: "CSS",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />, // Tailwind CSS icon
    name: "Tailwind CSS",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
  },
  {
    icon: <FaDocker className="text-4xl text-blue-400 lg:text-5xl" />, // Docker icon
    name: "Docker",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-500 lg:text-5xl" />, // Kubernetes icon
    name: "Kubernetes",
  },
  {
    icon: <FaAws className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "AWS",
  },
  {
    icon: <SiGit className="text-4xl text-orange-600 lg:text-5xl" />, // Git icon
    name: "Git",
  },
  {
    icon: <FcLinux className="text-4xl text-black lg:text-5xl" />, // Linux icon
    name: "Linux",
  },
  {
    icon: <SiGithubactions className="text-4xl text-gray-700 lg:text-5xl" />,
    name: "GitHub Actions",
  },
  {
    icon: <SiJenkins className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Jenkins",
  },
 
];


export const EXPERIENCES = [
  {
    title: "Laboratory Technician",
    company: "Geophysical Institute of Israel",
    duration: "July 2021 - October 2022",
    description: `
    Supervised and troubleshot 150+ sensors, using systematic checks to boost data quality by 20%. 
    Calibrated GPS and communication equipment, streamlining processes to achieve 95% accuracy in data collection.`,
  },
  {
    title: "Computer Hardware Technician",
    company: "Orbotech",
    duration: "January 2020 - March 2021",
    description: `
    Assembled and troubleshot hardware systems, optimizing performance in a Linux environment.
     Collaborated with senior engineers, providing technical support to 50+ colleagues, reducing system downtime by 40% through efficient troubleshooting.`,
},
  {
    title: "Advanced Technology Systems Technician",
    company: "Israel Defense Forces",
    duration: "June 2016 - December 2019",
    description:
      "Managed and maintained critical technology systems, including hardware and software integrations. Gained hands-on experience in troubleshooting advanced systems and collaborated with teams to ensure operational reliability.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Holon Institute of Technology (HIT)",
    duration: "Expected Graduation: November 2025",
    description:
      "Pursuing a B.Sc. in Computer Science with a focus on software engineering, DevOps, and cloud computing. Engaged in projects involving full-stack development, machine learning, and system optimization.",
  },
  {
    degree: "Practical Electronics Engineer",
    institution: "Ort Rehovot, Israel",
    duration: "2013 – 2015",
    description:
      "Completed studies in Practical Electronics Engineering, gaining hands-on experience with real-time systems, hardware-software integration, and troubleshooting electronic circuits.",
  },
];
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/SharonOShimon",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/iiTzShaa/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sharon-shimon/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
