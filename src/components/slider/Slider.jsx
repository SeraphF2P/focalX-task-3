import React, { useState } from "react";
import useCarousel from "../../hooks/useCarousel";
import { Icon } from "../ui/Icon";
import styles from "./slider.module.css";

const images = [
  { src: "/banner-01.jpg", alt: "villa 1 image" },
  { src: "/banner-02.jpg", alt: "villa 2 image" },
  { src: "/banner-03.jpg", alt: "villa 3 image" },
];

export const Slider = () => {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });
  };
  const decr = () => {
    setCount((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  };
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
      <div className={styles.pagenations}>
        {images.map((_, index) => {
          return (
            <span
              key={index}
              data-active={index === count}
              className={styles.pagenationDot}
              onClick={() => setCount(index)}
            />
          );
        })}
      </div>
    </section>
  );
};
