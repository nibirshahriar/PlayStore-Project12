import React from "react";
import LOGO from "../../assets/images/logo.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between items-center gap-4 bg-white py-3 container mx-auto">
        <img src={LOGO} alt="" className="w-[50px]" />
        <ul className="flex justify-between items-center gap-4">
          <li>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/apps"}>Apps</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/installapps"}>Installation</Link>{" "}
          </li>
        </ul>
        <button className="btn bg-purple-500 text-white">
          {" "}
          <FaGithub /> Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
