import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BestDeal } from "../../components/bestDeal/BestDeal";
import { PropertyPriviegeCard } from "../../components/propertyPriviegeCard/PropertyPriviegeCard";
import { Accordion } from "../../components/ui";
import { siteConfig } from "../../configs/site";
import styles from "./propertiesDetailsPage.module.css";
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

export const PropertiesDetailsPage = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const villaId = searchParams.get("villaId");
  const villa =
    siteConfig.villas.find((villa) => villa.id === villaId) ??
    siteConfig.villas[0];
  if (villa == undefined) return nav("/not-found");
  return (
    <main className={styles.main}>
      <article className={styles.articale}>
        <div className={styles.imageWrapper}>
          <img src={villa.image} alt={villa.type} />
        </div>
        <div className={styles.header}>
          <p className={styles.type}>{villa.type}</p>
          <p className={styles.price}>{villa.price}</p>
        </div>
        <p className={styles.address}>{villa.address}</p>
        <p>
          Get the best vila agency HTML CSS Bootstrap Templates for your company
          website. TemplateMo provides you the best free CSS templates in the
          world. Please tell your friends about it. Thank you. Cloud bread logo
          letters skateboard texture tumblr succulents single-origin coffee
          schlitz enamel pin you probably haven’t heard of them ugh readymade.
        </p>
        <p>
          When you look for free CSS templates, you can simply type TemplateMo
          in any search engine website. In addition, you can type TemplateMo
          Digital Marketing, TemplateMo Corporate Layouts, etc. Moschino
          cardigan hoodie pop-up.
        </p>
        <Accordion items={items} />
      </article>
      <div className={styles.card}>
        <PropertyPriviegeCard />
      </div>
      <div className={styles.bestDeal}>
        <BestDeal />
      </div>
    </main>
  );
};
