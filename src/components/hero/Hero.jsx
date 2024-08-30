import "@splidejs/react-splide/css";
import React from "react";
import { Slider } from "../slider/Slider";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.main}>
      <Slider />
      <article className={styles.articale}>
        <div className={styles.title}>
          <p>toronto,</p>
          <p>canada</p>
        </div>
        <h1 className={styles.headLine}>hurry! get the best villa for you</h1>
      </article>
    </section>
  );
};
