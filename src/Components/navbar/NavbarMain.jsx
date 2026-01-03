import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavbarMain = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <nav className="md:max-w-[80vw] max-w-[90vw] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-6">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-[var(--color-black)] items-center p-4 rounded-r-full rounded-l-full border-[0.5px] border-[var(--color-orange)]">
          <NavbarLogo />
          <div className="hidden lg:block">
            <NavbarLinks />
          </div>
          <NavbarBtn />
        </div>
        
        <div 
          onClick={() => setToggle(!toggle)} 
          className="cursor-pointer hover:bg-[var(--color-cyan)] bg-[var(--color-black)] hover:text-[var(--color-black)] lg:hidden text-[var(--color-white)] p-5 rounded-xl border-[0.5px] border-[var(--color-orange)] text-5xl transition-all duration-300"
        >
          {toggle ? <IoClose /> : <IoIosMenu />}
        </div>
      </nav>

      {toggle && (
        <div 
          className="fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md z-10 lg:hidden flex items-start justify-center pt-32"
          onClick={() => setToggle(false)}
          style={{
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="bg-[var(--color-black)] border border-[var(--color-orange)] rounded-2xl p-8 w-[85vw] max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideDown 0.3s ease-out',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            <NavbarLinks />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default NavbarMain;