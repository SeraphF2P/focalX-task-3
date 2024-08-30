import React from "react";
import { ScheduleAVisit } from "../../../components/ui";
import { siteConfig } from "../../../configs/site";
import { NavLink } from "../navLink/NavLink";
import styles from "./DisktopNav.module.css";
export const DisktopNav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navMain}>
        {siteConfig.navigations.map((link) => {
          return (
            <li key={link.href}>
              <NavLink to={link.href}>{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <ScheduleAVisit />
    </nav>
  );
};
