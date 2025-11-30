    import React, { useState } from "react";
    import NavbarLogo from "./NavbarLogo";
    import NavbarLinks from "./NavbarLinks";
    import NavbarBtn from "./NavbarBtn";
    import { IoIosMenu } from "react-icons/io";

    const NavbarMain = () => {
    const [toggle,setTogle] = useState(false)
    return (
        <>
        <nav className="md:max-w-[80vw] max-w-[90vw] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-6 ">
        <div className="flex justify-between  w-full max-w-[1200px] mx-auto bg-[var(--color-black)] items-center  p-4 rounded-r-full rounded-l-full border-[0.5px] border-[var(--color-orange)]">
            <NavbarLogo />
            <div className={"hidden lg:block "}>
            <NavbarLinks />
            </div>
            <NavbarBtn />
        </div>
        <div onClick={()=>setTogle(!toggle)} className="cursor-pointer hover:bg-[var(--color-cyan)] bg-[var(--color-black)] hover:text-[var(--color-black)]  lg:hidden md-block text-[var(--color-white)] p-5 rounded-xl border-[0.5px] border-[var(--color-orange)] text-5xl">
            
            <IoIosMenu  />
        </div>
        
        </nav>
        {toggle && (
            <div className=" fixed top-[20vh] w-full h-[8vh]  bg-gray-500 backdrop-blur-sm z-10 lg:hidden flex items-center justify-center">
            <NavbarLinks  />
            </div>
        )}
        
        </>
    );
    };

    export default NavbarMain;
