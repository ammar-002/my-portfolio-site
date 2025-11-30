import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt,FaReact,FaGithub,FaPython  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";

const AllSkills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "Python", icon: <FaPython />  },
  ];
  return (
    <div >
      <SingleSkill skills={skills} />
    </div>
  );
};

export default AllSkills;
