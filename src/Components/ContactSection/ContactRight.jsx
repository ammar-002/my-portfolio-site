import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactRight = () => {
  return (
    <div className="md:max-w-[40vw] max-w-[70vw] mx-auto pt-5 md:pt-1 flex flex-col gap-5 items-center">
      <img src="contact.png" className="h-[180px]" alt="Contact Illustration" />
      <div className="flex flex-col gap-3">
        {/* Email Link */}
        <div className="flex items-center gap-2 text-[var(--color-white)] text-lg">
          <BiLogoGmail />
          <a
            href="mailto:iammuhammadammar2@gmail.com"
            target="blank"
            className="hover:text-[var(--color-orange)] transition-colors duration-300"
          >
            iammuhammadammar2@gmail.com
          </a>
        </div>

        {/* Phone Link */}
        <div className="flex items-center gap-2 text-[var(--color-white)] text-lg">
          <FaPhoneAlt />
          <a
            href="tel:+923273614062"
            className="hover:text-[var(--color-orange)] transition-colors duration-300"
          >
            +92 327 3614062
          </a>
        </div>

        {/* Address Link (Google Maps) */}
        <div className="flex items-center gap-2 text-[var(--color-white)] text-lg">
          <FaMapMarkerAlt />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Sector+11-F+New+Karachi+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-orange)] transition-colors duration-300"
          >
            Sector 11-F, New Karachi, Karachi
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
