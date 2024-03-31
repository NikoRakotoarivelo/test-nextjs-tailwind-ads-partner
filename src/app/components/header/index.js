"use client";
import {
  faPhone,
  faCalendarAlt,
  faBars,
  faMapMarkerAlt,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function header() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-3/4 px-14 flex-col md:flex-row p-2 md:flex md:items-center">
        <img className="h-40" src="mce logo-02.png" alt="Logo MCE" />
        <button className="bg-colorButtonHeader text-white font-bold duration-500 px-6 py-2 mx-4 my-2 hover:bg-colorButtonHeader rounded">
          Une question?
          <FontAwesomeIcon
            icon={faPhone}
            className="h-5 w-5 transform rotate-260 ml-2"
            style={{ color: "black" }}
          />
        </button>
        <button className="bg-customGray text-white font-bold duration-500 px-6 py-2 mx-4 my-2 hover:bg-colorButtonHeader rounded border-solid border-2 border-colorButtonHeader">
          RDV personnalisé
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="h-5 w-5 transform rotate-260 ml-2"
          />
        </button>
      </div>
      <div className="w-full md:w-1/4 px-14 md:justify-end md:flex-row md:flex p-2 flex items-center">
        <div className="grid grid-cols-3">
          <div className="mx-8 text-white">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6" />
          </div>
          <div className="mx-8 text-white">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
          </div>
          <div className="mx-8 relative">
            <span className="absolute bottom-5 left-4 bg-yellow-500 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="h-6 w-6 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
