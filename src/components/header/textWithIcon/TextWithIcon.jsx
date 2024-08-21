import React from "react";
import styles from "./TextWithIcon.module.css";
import { Icon } from "../../Icon";
export const TextWithIcon = ({ text, icon }) => {
  const Component = (props) => Icon[icon](props);
  return (
    <div className={styles.wrapper}>
      <a>{text}</a>
      <Component className={styles.icon} />
    </div>
  );
};
