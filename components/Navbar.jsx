import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  // links
  const links = [
    { name: "Principal", to: "#principal" },
    { name: "Servicios", to: "#servicios" },
    { name: "Asesoramiento", to: "#asesoramiento" },
    { name: "Contacto", to: "#contacto" },
  ];



  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeNav();
    }
  };

  return (
    <div className="text-black fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full font-sans font-bold text-2xl text-[#ffbf00]">Álvarez Derecho</h1>
        <ul className="hidden md:flex">
          {links.map((link, index) => (
            <li key={index} className="p-3 hover:scale-105 duration-200">
              <span className="navbar-item"  onClick={() => scrollToSection(link.to)}>{link.name}</span>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <CSSTransition in={nav} timeout={300} classNames="slide" unmountOnExit>
        <div className="bg-white fixed left-0 top-0 w-[60%] h-full border-r">
          <ul className="pt-12 uppercase">
            {links.map((link, index) => (
              <li key={index} className="p-3">
                <span onClick={() => scrollToSection(link.to)}>{link.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
