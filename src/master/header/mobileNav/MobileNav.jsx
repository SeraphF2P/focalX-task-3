import React, { useEffect, useState } from "react";
import { ScheduleAVisit } from "../../../components/ui";
import { TextWithIcon } from "../../../components/ui/textWithIcon/TextWithIcon";
import { siteConfig } from "../../../configs/site";
import { NavLink } from "../navLink/NavLink";
import { SocialLinks } from "../socialLinks/SocialLinks";
import styles from "./mobileNav.module.css";
export const MobileNav = () => {
  const [isOpen, setisOpen] = useState(false);
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
            {siteConfig.navigations.map((link) => {
              return (
                <li key={link.href}>
                  <NavLink to={link.href}>{link.name}</NavLink>
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
