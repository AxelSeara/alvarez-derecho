import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const navigateToSection = (id) => {
    setTimeout(() => {
      const sectionDiv = document.getElementById(id);
      if (sectionDiv) {
        const elementRect = sectionDiv.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        window.scrollTo({ top: middle, behavior: 'smooth' });
      }
    }, 90);
  };

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [isHomePage]);

  const links = [
    { name: "Principal", to: "/#principal" },
    { name: "Servicios", to: "/#servicios" },
    { name: "Asesoramiento", to: "/#asesoramiento" },
    { name: "Contacto", to: "/#contacto" },
    { name: "Blog", to: "/blog" },
  ];

  return (
    <div className={`text-black fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full font-sans font-bold text-2xl text-[#ffbf00]">
          <Link href="/">Álvarez Derecho</Link>
        </h1>
        <ul className="hidden md:flex">
          {links.map((link, index) => (
            <li key={index} className={`p-3 transition-all duration-300 cursor-pointer ${link.name === "Blog" ? "text-[#ffbf00] font-bold" : ""}`}>
              <Link href={link.to} onClick={(e) => {
                if (link.to.startsWith("/#")) {
                  e.preventDefault();
                  closeNav();
                  const id = link.to.substring(2);
                  navigateToSection(id);
                } else {
                  router.push(link.to);
                }
              }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <CSSTransition in={nav} timeout={300} classNames="slide" unmountOnExit>
        <div className="bg-white fixed left-0 top-0 w-[60%] h-full border-r">
          <ul className="pt-12 uppercase">
            {links.map((link, index) => (
              <li key={index} className={`p-3 transition-all duration-300 cursor-pointer ${link.name === "Blog" ? "text-[#ffbf00] font-bold" : ""}`}>
                <Link href={link.to} onClick={(e) => {
                  if (link.to.startsWith("/#")) {
                    e.preventDefault();
                    closeNav();
                    const id = link.to.substring(2);
                    navigateToSection(id);
                  } else {
                    router.push(link.to);
                  }
                }}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
