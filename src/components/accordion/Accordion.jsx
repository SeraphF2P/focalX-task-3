import React, { useState } from "react";
import styles from "./Accordion.module.css";

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
      <div data-isopen={isOpen} className={styles.accordionContent}>
        <div className={styles.gridRow}> {content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
