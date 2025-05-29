"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface MenuItem {
  text: string;
  link: string;
}

interface NavbarProps {
  name: string;
  hamburguerIconAltText: string;
  menuItems: MenuItem[];
}

const Navbar = ({ name, hamburguerIconAltText, menuItems }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(
    menuItems[0]?.link || "#"
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary border-white-secondary z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white-secondary">
            {name}
          </span>
        </a>

        {/* Botão de abrir/fechar menu no mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-tertiary rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-tertiary"
          aria-expanded={isOpen}
          aria-label={hamburguerIconAltText}
          title={hamburguerIconAltText}
        >
          <GiHamburgerMenu size={45} />
        </button>

        {/* Menu de navegação */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-2 border-tertiary border-dashed md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {menuItems.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  onClick={() => setActiveLink(item.link)}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeLink === item.link
                      ? "text-tertiary"
                      : "text-white-secondary"
                  } hover:text-tertiary text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
