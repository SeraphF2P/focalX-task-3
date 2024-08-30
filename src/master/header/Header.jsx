import React from "react";
import styles from "./header.module.css";
import { DisktopNav } from "./disktopNav/DisktopNav";
import { SocialLinks } from "./socialLinks/SocialLinks";
import { TextWithIcon } from "./../../components/ui";
import { MobileNav } from "./mobileNav/MobileNav";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.emailAndLocation}>
            <TextWithIcon text={"info@company.com"} icon={"envelope"} />
            <TextWithIcon text={"sunny isles beach, fl 33160"} icon={"map"} />
          </div>
          <SocialLinks />
        </div>
      </div>
      <div className={styles.headercontainer}>
        <DisktopNav />
        <MobileNav />
        <div className={styles.logo}>VILLA</div>
      </div>
    </header>
  );
};
