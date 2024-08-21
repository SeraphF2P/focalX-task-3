import React from "react";
import styles from "./landing.module.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Landing = () => {
  return (
    <section className={styles.main}>
      <Splide
        className={styles.splide}
        options={{
          type: "loop",
          rewind: true,
          autoplay: true,
          resetProgress: false,
        }}
        tag="section"
        aria-label="My Favorite Images"
      >
        <SplideSlide asChild className={styles.slide}>
          <img
            className={styles.image}
            src="/banner-01.jpg"
            alt="villa 1 image"
          />
        </SplideSlide>
        <SplideSlide asChild className={styles.slide}>
          <img
            className={styles.image}
            src="/banner-02.jpg"
            alt="villa 2 image"
          />
        </SplideSlide>
        <SplideSlide asChild className={styles.slide}>
          <img
            className={styles.image}
            src="/banner-03.jpg"
            alt="villa 2 image"
          />
        </SplideSlide>
      </Splide>
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

export default Landing;
