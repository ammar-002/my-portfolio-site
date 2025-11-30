import React from "react";
import { GoArrowDownRight } from "react-icons/go";

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold font-[Josefin] text-[var(--color-black)] border-[var(--color-cyan)] border flex items-center gap-1 bg-gradient-to-r  from-[var(--color-darkCyan)] to-[var(--color-orange)] transition-all duration-500 hover:scale-110 hover:border-[var(--color-orange)] cursor-pointer '>
      <p className="md:block hidden">Hire Me </p>
      <p className="md:hidden block">Hire</p>
       <div className="hidden md:block">
        <GoArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
