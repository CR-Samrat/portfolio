import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ mode, setMode, isHome }) => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">AH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {/* isActive function is provided by NavLink */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : `${mode ? "text-white" : "text-black"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : `${mode ? "text-white" : "text-black"}`
          }
        >
          Projects
        </NavLink>
        {isHome ? (
          ""
        ) : (
          <button
            onClick={() => setMode(!mode)}
            className={`${mode ? "text-white" : "text-black"}`}
          >
            {mode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
