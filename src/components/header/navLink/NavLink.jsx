import React from "react";
import styles from "./NavLink.module.css";
export const NavLink = ({ children, setActiveHash, activeHash, ...props }) => {
  return (
    <a
      data-active={activeHash === props.href}
      onClick={() => {
        setActiveHash(props.href);
      }}
      {...props}
      className={styles.link}
    >
      {children}
    </a>
  );
};
