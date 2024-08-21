import React from "react";
import styles from "./SocialLinks.module.css";
import { Icon } from "../../Icon";
export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <div className={styles.socialIcon}>
        <Icon.facebook />
        <span className="sr-only">facebook icon</span>
      </div>
      <div className={styles.socialIcon}>
        <Icon.twitter />
        <span className="sr-only">twitter icon</span>
      </div>
      <div className={styles.socialIcon}>
        <Icon.linkedin />
        <span className="sr-only">linkedin icon</span>
      </div>
      <div className={styles.socialIcon}>
        <Icon.instagram />
        <span className="sr-only">instagram icon</span>
      </div>
    </div>
  );
};
