import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt,FaReact,FaGithub,FaPython, FaJava  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp, TbBrandMysql } from "react-icons/tb";

const AllSkills = () => {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <TbBrandMysql /> },
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
