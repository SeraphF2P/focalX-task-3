import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./subLayout.module.css";
import { hrefToText } from "../helper/formater";
export const SubLayout = () => {
  const location = useLocation();
  return (
    <>
      <section className={styles.hero}>
        <img className={styles.image} src="/page-heading-bg.jpg" alt="" />
        <div className={styles.main}>
          <p className={styles.pathname}>{`home / ${hrefToText(
            location.pathname
          )}`}</p>
          <h1 className={styles.header}>{hrefToText(location.pathname)}</h1>
        </div>
      </section>
      <Outlet />
    </>
  );
};
