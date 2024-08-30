import React, { useState } from "react";
import styles from "./accordion.module.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle} onClick={toggleAccordion}>
        {title}
      </div>
      <div className={styles.accordionContent} data-isopen={isOpen}>
        <div className={styles.gridRow}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ items }) => {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
