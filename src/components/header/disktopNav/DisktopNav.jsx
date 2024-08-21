import React, { useState } from "react";
import styles from "./DisktopNav.module.css";
import { NavLink } from "../navLink/NavLink";
import { config } from "../../../configs/site";
import { ScheduleAVisit } from "../../scheduleAVisit/ScheduleAVisit";
export const DisktopNav = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navMain}>
        {config.navigations.map((link) => {
          return (
            <li key={link.href}>
              <NavLink
                activeHash={activeHash}
                setActiveHash={setActiveHash}
                href={link.href}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ScheduleAVisit />
    </nav>
  );
};
