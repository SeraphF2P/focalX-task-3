import React, { useEffect, useState } from "react";
import { config } from "../../../configs/site";
import { NavLink } from "../navLink/NavLink";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { TextWithIcon } from "../textWithIcon/TextWithIcon";
import styles from "./mobileNav.module.css";
import { ScheduleAVisit } from "../../scheduleAVisit/ScheduleAVisit";
export const MobileNav = () => {
  const [isOpen, setisOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);
  useEffect(() => {
    const element = document.body;
    if (isOpen) {
      element.style.overflow = "hidden";
    } else {
      element.style.overflow = "visible";
    }
    return () => {
      element.style.overflow = "visible";
    };
  }, [isOpen]);
  return (
    <>
      <button
        aria-checked={isOpen}
        aria-controls="#navbar"
        onClick={() => setisOpen((prev) => !prev)}
        className={styles.menuBtn}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>
      <div
        aria-hidden={!isOpen}
        className={styles.overlayer}
        onClick={() => setisOpen(false)}
      ></div>
      <nav id="navbar" aria-hidden={!isOpen} className={styles.navbar}>
        <div className={styles.navMain}>
          <ul className={styles.navList}>
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
        </div>
        <div className={styles.menuFooter}>
          <TextWithIcon text={"info@company.com"} icon={"envelope"} />
          <TextWithIcon text={"sunny isles beach, fl 33160"} icon={"map"} />
          <SocialLinks />
        </div>
      </nav>
    </>
  );
};
