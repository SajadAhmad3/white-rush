import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
import navigationData from "../Nav.json";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden relative">
      <button
        className={`text-black bg-white rounded-full p-2 focus:outline-none transform transition-transform duration-500 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="transition-all duration-500" />
        ) : (
          <MenuIcon className="transition-all duration-500" />
        )}
      </button>

      <div
        className={`fixed top-[70px] left-0 pb-10 w-full bg-muted-900 items-center flex flex-col -z-10 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          transitionProperty: "transform, opacity, max-height",
          background: "linear-gradient(180deg, #242424, #121212 65.62%)",
        }}
      >
        <ul
          className={`mt-14 space-y-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {navigationData.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="text-sm text-white hover:text-secondary"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact-us"
          className={`mt-4 bg-primary hover:bg-secondary hover:duration-300 transition-all duration-500 text-white px-4 py-2 rounded-lg text-[10px] max-w-[100px] ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Menu;
