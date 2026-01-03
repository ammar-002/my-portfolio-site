import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col h-full pb-10 pt-[8vh] md:text-left text-center px-4">
      <div className="space-y-3 md:space-y-4">
        <h2 
          className="text-[#00d9ff] text-lg md:text-3xl lg:text-4xl font-bold uppercase tracking-wider animate-fade-in"
          style={{
            animation: 'fadeSlideIn 0.8s ease-out forwards',
            opacity: 0
          }}
        >
          MERN Stack Developer
        </h2>
        
        <h1 
          className="text-[#ff6b35] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          style={{
            animation: 'fadeSlideIn 0.8s ease-out 0.2s forwards',
            opacity: 0
          }}
        >
          Muhammad Ammar
        </h1>
        
        <p 
          className="text-gray-300 text-base md:text-xl lg:text-2xl font-[josefin] mt-6 md:mt-8 leading-relaxed max-w-3xl"
          style={{
            animation: 'fadeSlideIn 0.8s ease-out 0.4s forwards',
            opacity: 0
          }}
        >
          Computer Science undergraduate building real-world 
          <br className="hidden md:block" /> 
          <span className="md:hidden"> </span>
          MERN stack applications.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroText;