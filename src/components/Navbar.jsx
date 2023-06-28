import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Definimos los links en una constante para mantener todo ordenado
  const links = [
    { name: "Principal", to: "#principal" },
    { name: "Servicios", to: "#servicios" },
    { name: "Asesoramiento", to: "#asesoramiento" },
    { name: "Contacto", to: "#contacto" },
  ];

  return (
    <div className="text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full font-sans font-bold text-2xl text-[#ffbf00]">Alvarez Derecho</h1>
      <ul className="hidden md:flex" >
        {links.map((link, index) => (
          <li key={index} className="p-3 hover:scale-105 duration-200">
            <a href={link.to}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      {nav && (
        <div className={nav ? " bg-white fixed left-0 top-0 w-[60%] h-full border-r transition  ease-in-out duration-500" : "fixed left-[-100%]"}>
          <ul className="pt-12 uppercase">
            {links.map((link, index) => (
              <li key={index} className="p-3">
                <a href={link.to}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
