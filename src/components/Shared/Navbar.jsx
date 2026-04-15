import React from "react";
import LOGO from "../../assets/images/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between items-center gap-4 bg-white py-3 container mx-auto">
        <img src={LOGO} alt="" className="w-[50px]" />
        <ul className="flex justify-between items-center gap-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-purple-400 border-b border-purple-500" : ""}`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-purple-400 border-b border-purple-500" : ""}`
              }
              to={"/apps"}
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-purple-400 border-b border-purple-500" : ""}`
              }
              to={"/installapps"}
            >
              Installation
            </NavLink>
          </li>
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub /> Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
