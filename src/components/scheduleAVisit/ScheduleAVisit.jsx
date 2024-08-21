import React from "react";
import styles from "./scheduleAVisit.module.css";
import { Icon } from "../Icon";
export const ScheduleAVisit = () => {
  return (
    <div className={styles.btn}>
      <div className={styles.icon}>
        <Icon.calender />
      </div>
      <a href="#" className={styles.link}>
        Schedule a visit
      </a>
    </div>
  );
};
