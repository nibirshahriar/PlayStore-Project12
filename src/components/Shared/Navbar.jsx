import React from "react";
import LOGO from "../../assets/images/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <img src={LOGO} alt="" className="w-[50px]" />
      <ul>
        <li>
          {" "}
          <Link>Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link>Apps</Link>{" "}
        </li>
        <li>
          {" "}
          <Link>Installation</Link>{" "}
        </li>
      </ul>
      <button>Contribute</button>
    </nav>
  );
};

export default Navbar;
