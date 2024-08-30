import React from "react";
import useCarousel from "../../hooks/useCarousel";
import { Icon } from "../ui/Icon";
import styles from "./slider.module.css";

const images = [
  { src: "/banner-01.jpg", alt: "villa 1 image" },
  { src: "/banner-02.jpg", alt: "villa 2 image" },
  { src: "/banner-03.jpg", alt: "villa 3 image" },
];

export const Slider = () => {
  const { count, decr, incr } = useCarousel(images.length);
  return (
    <section className={styles.splide} aria-label="photos of villas">
      <div
        className={styles.slideContainer}
        style={{
          translate: `${count * -100}vw 0%`,
        }}
      >
        {images.map((image, index) => {
          return (
            <span
              key={index}
              className={`${styles.slide}  
              `}
            >
              <img className={styles.image} src={image.src} alt={image.alt} />
            </span>
          );
        })}
      </div>
      <div className={styles.arrows}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            decr();
          }}
          className={`${styles.arrowLeft} ${styles.arrow}`}
        >
          <Icon.arrowLeft />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            incr();
          }}
          className={`${styles.arrowRight} ${styles.arrow}`}
        >
          <Icon.arrowRight />
        </button>
      </div>
    </section>
  );
};
