import React from "react";
import styles from "./propertyPriviegeCard.module.css";
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
export const PropertyPriviegeCard = () => {
  return (
    <div className={styles.main}>
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
  );
};
