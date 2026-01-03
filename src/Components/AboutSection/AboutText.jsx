import React from "react";

const AboutText = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center md:w-[60vw] mx-auto  pt-10  ">
      <h1 className="text-4xl font-bold text-[var(--color-cyan)] w-[50vw]">
        What I Do 
      </h1>
      <p className="text-[var(--color-white)] text-lg text-center md:text-left ">
        I'm Muhammad Ammar, a Computer Science undergraduate at Dawood
        University with a keen interest in solving computing problems. I am  aiming to contribute to innovative tech solutions in the future.
      </p>
    </div>
  );
};

export default AboutText;
