import React from "react";
import styles from "./redHeader.module.css";
const Redheader = ({ children }) => {
  return <p className={styles.main}>{children}</p>;
};

export default Redheader;
