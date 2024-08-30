import React from "react";
import styles from "./redHeader.module.css";
export const Redheader = ({ children }) => {
  return <p className={styles.main}>{children}</p>;
};
