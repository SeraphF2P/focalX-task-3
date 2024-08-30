import React from "react";
import { NavLink as Link } from "react-router-dom";
import styles from "./NavLink.module.css";
export const NavLink = ({ children, to, ...props }) => {
  return (
    <Link
      to={to}
      {...props}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
    >
      {children}
    </Link>
  );
};
