import React from "react";
const SingleSkill = ({ skills }) => {
  return (
    <div className="flex md:gap-2 gap-10 justify-center -ml-10    md:flex-nowrap flex-wrap items-center md:h-[30vh] ">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className="skill-item lg:h-[30vh]  font-[Josefin] gap-2 hover:scale-105 w-[7vw] flex-wrap lg:bg-[var(--color-orange)] rounded-t-4xl flex flex-col items-center justify-center"
          >
            <p className="lg:text-5xl md:text-lg text-2xl bg-[var(--color-orange)] lg:bg-white lg:p-2 md:p-6 p-5  rounded-full lg:text-[var(--color-cyan)] text-black">
              {skill.icon}
            </p>
            <h3 className="text-[var(--color-brown)] hidden lg:block font-semibold text-lg">
              {skill.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
export default SingleSkill;