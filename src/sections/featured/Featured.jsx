import React from "react";
import Accordion from "../../components/accordion/Accordion";
import Redheader from "../../components/redHeader/Redheader";
import styles from "./featured.module.css";

const features = [
  {
    id: crypto.randomUUID(),
    image: "/info-icon-01.png",
    header: "250 m2",
    paragraph: "total flat space",
  },
  {
    id: crypto.randomUUID(),
    image: "/info-icon-02.png",
    header: "contract",
    paragraph: "contract ready",
  },
  {
    id: crypto.randomUUID(),
    image: "/info-icon-03.png",
    header: "payment",
    paragraph: "payment process",
  },
  {
    id: crypto.randomUUID(),
    image: "/info-icon-04.png",
    header: "safety",
    paragraph: "24/7 under control",
  },
];
const items = [
  {
    title: "best useful links ?",
    content:
      "get the best website template in HTML CSS and bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. please tell your friends about it.",
  },
  {
    title: "how does this work ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis officiis porro magnam debitis cum delectus iure quidem laboriosam, praesentium voluptate sequi laborum, neque fuga iste deleniti. In, similique tenetur?",
  },
  {
    title: "why is villa agency the best",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis officiis porro magnam debitis cum delectus iure quidem laboriosam, praesentium voluptate sequi laborum, neque fuga iste deleniti. In, similique tenetur?",
  },
];
const Featured = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="/featured.jpg"
              alt="featured villa"
            />
            <div className={styles.icon}>
              <img src="/featured-icon.png" alt="icon" />
            </div>
          </div>
          <articale className={styles.articale}>
            <Redheader>featured</Redheader>
            <h2>best appartment & sea view</h2>
            <Accordion items={items} />
          </articale>
        </div>
        <div className={styles.second}>
          {features.map((feature) => {
            return (
              <div key={feature.id}>
                <img src={feature.image} alt="" />
                <div>
                  <h3>{feature.header}</h3>
                  <p>{feature.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
