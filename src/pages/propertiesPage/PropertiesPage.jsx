import React from "react";
import { QueryBtn } from "../../components/ui";
import { PropertyCard } from "../../components/ui/propertyCard/PropertyCard";
import styles from "./propertiesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { siteConfig } from "../../configs/site";

const filters = [
  {
    name: "villa house",
    value: "luxury villa",
  },
  {
    name: "penthouse",
    value: "penthouse",
  },
  {
    name: "apartment",
    value: "apartment",
  },
];
export const PropertiesPage = () => {
  const queryKey = "search";
  const [searchParams] = useSearchParams();
  const selectedType = searchParams.get(queryKey);
  const filteredData = selectedType
    ? siteConfig.villas.filter(({ type }) => type === selectedType)
    : siteConfig.villas;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <section className={styles.filterSection}>
          <QueryBtn selected queryKey={queryKey} value={""}>
            show all
          </QueryBtn>
          {filters.map((filter) => {
            return (
              <QueryBtn
                key={filter.name}
                queryKey={queryKey}
                value={filter.value}
              >
                {filter.name}
              </QueryBtn>
            );
          })}
        </section>
        <section className={styles.gallery}>
          {filteredData.map((card) => {
            return <PropertyCard key={card.id} {...card} />;
          })}
        </section>
      </div>
    </section>
  );
};
