import React from "react";
import styles from "./propertiesSection.module.css";
import { Redheader } from "../ui";
import { PropertyCard } from "../ui/propertyCard/PropertyCard";
import { siteConfig } from "../../configs/site";

export const PropertiesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Redheader>properteis</Redheader>
        <h2>we provide the best property you like</h2>
        <section className={styles.gallery}>
          {siteConfig.villas.map((villa) => {
            return <PropertyCard key={villa.id} {...villa} />;
          })}
        </section>
      </div>
    </section>
  );
};
