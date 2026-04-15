import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-semibold pb-2 ${isActive ? "text-purple-400 border-b border-purple-500" : ""}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
