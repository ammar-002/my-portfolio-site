import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col h-full pb-10 pt-[8vh] md:text-left sm:text-center ">
      <h2 className="text-[var(--color-cyan)] text-xl md:text-4xl font-bold uppercase  ">
        MERN Stack Developer
      </h2>
      <h1 className="text-[var(--color-orange)] text-3xl md:text-6xl font-bold">
        Muhammad Ammar
      </h1>
      <p className="text-gray-300 md:text-2xl font-[josefin] mt-4">
        Enthusiastic Computer Science Student And Eager To
        <br /> Learn New Technologies
      </p>
    </div>
  );
};

export default HeroText;
