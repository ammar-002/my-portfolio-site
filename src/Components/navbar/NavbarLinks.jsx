import React from "react";
 
const NavbarLinks = () => {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "projects" },
     
    { link: "Contact", section: "contact" },
  ];
  return (
    <div>
      <ul className="flex font-[josefin] md:text-xl   gap-5 text-[var(--color-white)]">
        {links.map((item, index) => (
          <li
            key={index}
            className="hover:text-[var(--color-orange)] transition-colors duration-300 cursor-pointer hover:scale-110"
          >
            <a href={`#${item.section}`}>{item.link}</a>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
