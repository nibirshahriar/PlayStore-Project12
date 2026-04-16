import React from "react";
import LOGO from "../../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between items-center gap-4 bg-white py-3 container mx-auto">
        <img src={LOGO} alt="" className="w-[50px]" />
        <ul className="flex justify-between items-center gap-4">
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/InstallApps"}> Installation</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/dashboard"}> Dashboard</MyNavLink>
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
