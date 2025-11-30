import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const ContactRight = () => {
  return (
    <div className="md:max-w-[40vw] max-w-[70vw] mx-auto pt-5 md:pt-1 flex flex-col gap-5 items-center">
      <img src="contact.png" className="h-[180px]" alt="" />
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center gap-2 text-[var(--color-white)] text-lg ">
          <BiLogoGmail />
          <p> sayhi2ammar@gmail.com</p>
        </div>
        <div className="text-[var(--color-white)] text-lg flex items-center gap-2">
          <FaPhoneAlt />
          <p> +923273614062</p>
        </div>
        <div className="text-[var(--color-white)] text-lg flex items-center gap-2">
          <FaMapMarkerAlt />
          <p className="text-[var(--color-white)] text-lg ">
            {" "}
            Sector 11-F New Karachi,Karachi
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
