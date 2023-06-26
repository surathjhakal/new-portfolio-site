import { BsGit, BsGithub } from "react-icons/bs";
import {
  FaAws,
  FaBootstrap,
  FaFigma,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRust,
} from "react-icons/fa";
import {
  SiAmazondynamodb,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiNetlify,
  SiPhp,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandDjango,
  TbBrandGolang,
  TbBrandKotlin,
  TbBrandMysql,
  TbBrandReactNative,
  TbBrandVscode,
} from "react-icons/tb";
import { DiCss3, DiFirebase } from "react-icons/di";
import { GrHeroku } from "react-icons/gr";

export const skillsData = [
  {
    name: "Programming Language",
    color: "blueviolet",
    icons: [
      {
        name: "Java",
        icon: <FaJava size={30} />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript size={30} />,
      },
      {
        name: "Python",
        icon: <FaPython size={30} />,
      },
      // {
      //   name: "Rust",
      //   icon: <FaRust size={30} />,
      // },
      // {
      //   name: "Go",
      //   icon: <TbBrandGolang size={30} />,
      // },
    ],
  },
  {
    name: "Frontend",
    color: "#e16913",
    icons: [
      {
        name: "React js",
        icon: <FaReact size={30} />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript size={30} />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript size={30} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap size={30} />,
      },
      {
        name: "Html",
        icon: <FaHtml5 size={30} />,
      },
      {
        name: "Css",
        icon: <DiCss3 size={30} />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={30} />,
      },
      {
        name: "Redux",
        icon: <SiRedux size={30} />,
      },
    ],
  },
  {
    name: "Backend",
    color: "darkslateblue",
    icons: [
      {
        name: "Node js",
        icon: <FaNodeJs size={30} />,
      },
      {
        name: "Express js",
        icon: <SiExpress size={30} />,
      },
      {
        name: "Php",
        icon: <SiPhp size={30} />,
      },
      {
        name: "Django",
        icon: <TbBrandDjango size={30} />,
      },
      {
        name: "Graphql",
        icon: <SiGraphql size={30} />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase size={30} />,
      },
      {
        name: "Aws",
        icon: <FaAws size={30} />,
      },
    ],
  },
  {
    name: "App Development",
    color: "forestgreen",
    icons: [
      {
        name: "React Native",
        icon: <TbBrandReactNative size={30} />,
      },
      // {
      //   name: "Kotlin android",
      //   icon: <TbBrandKotlin size={30} />,
      // },
    ],
  },
  {
    name: "Databases",
    color: "goldenrod",
    icons: [
      {
        name: "My sql",
        icon: <TbBrandMysql size={30} />,
      },
      {
        name: "Mongo DB",
        icon: <SiMongodb size={30} />,
      },
      {
        name: "Dynamo DB",
        icon: <SiAmazondynamodb size={30} />,
      },
      {
        name: "firebase",
        icon: <DiFirebase size={30} />,
      },
    ],
  },
  {
    name: "Others",
    color: "crimson",
    icons: [
      {
        name: "Git",
        icon: <BsGit size={30} />,
      },
      {
        name: "Github",
        icon: <BsGithub size={30} />,
      },
      {
        name: "VS Code",
        icon: <TbBrandVscode size={30} />,
      },
      {
        name: "Jupyter",
        icon: <SiJupyter size={30} />,
      },
      {
        name: "Figma",
        icon: <FaFigma size={30} />,
      },
      {
        name: "Heroku",
        icon: <GrHeroku size={30} />,
      },
      {
        name: "Netlify",
        icon: <SiNetlify size={30} />,
      },
    ],
  },
];
