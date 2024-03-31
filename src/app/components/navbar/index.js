"useClient";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const produits = [
    "Porte fenêtre",
    "Volet",
    "Porte de garage",
    "Pergola",
    "Grillage",
  ];

  return (
    <div className="flex flex-wrap">
      <div className="w-full bg-gray-300 rounded-tl-3xl rounded-tr-3xl">
        <div className="md:w-4/5 mx-16 mt-12">
          <a
            href="#"
            className="ml-3 font-bold text-lg  hover:text-colorButtonHeader"
          >
            {" "}
            Accueil{" "}
          </a>
          <a
            href="#"
            className="ml-3 font-bold text-lg  hover:text-colorButtonHeader"
          >
            {" "}
            Réalisations
          </a>
          <a
            href="#"
            className="ml-3 font-bold text-lg  hover:text-colorButtonHeader"
          >
            {" "}
            Nos services{" "}
          </a>
          <a
            href="#"
            className="ml-3 font-bold text-lg  hover:text-colorButtonHeader"
          >
            {" "}
            Nous recrutons
          </a>
          <a
            href="#"
            className="ml-3 font-bold text-lg  hover:text-colorButtonHeader"
          >
            {" "}
            MCE news
          </a>
        </div>
        <div className="md:w-1/5 float-right mx-8 mb-6 flex justify-center md:justify-around md:flex-row">
          <button
            onClick={toggleDropdown}
            className="float-right bg-customGray text-white font-bold py-6 px-6 -mt-10 rounded-full flex focus:outline-none items-center justify-center space-x-4"
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            <span>Nos produits</span>
          </button>
        </div>
        <div className="relative">
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <ul
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {produits.map((produit) => (
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      {produit}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
