import React from "react";
import Input from "../../components/input/Input";
import Redheader from "../../components/redHeader/Redheader";
import TextArea from "../../components/textArea/TextArea";
import styles from "./contactus.module.css";

const Contactus = () => {
  return (
    <section className={styles.section}>
      <div className={styles.first}>
        <img
          className={styles.backgroundImage}
          src="/contact-bg.jpg"
          alt="background image"
        />
        <Redheader>contact us</Redheader>
        <h2>get in touch with our agents</h2>
      </div>
      <div className={styles.main}>
        <div className={styles.map}>
          <img src="/map.png" alt="" />
        </div>
        <div className={styles.card}>
          <img className={styles.icon} src="/phone-icon.png" alt="" />
          <div className={styles.cardText}>
            <p>010-020-0340</p>
            <p>phone number</p>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.icon} src="/email-icon.png" alt="" />
          <div className={styles.cardText}>
            <p>info@villa.co</p>
            <p>business email</p>
          </div>
        </div>
        <div className={styles.contactForm}>
          <Input label="full name" type="text" placeholder="your name..." />
          <Input
            label="email address"
            type="email"
            placeholder="your e-mail..."
          />
          <Input label="subject" type="text" placeholder="subject..." />
          <TextArea label="message" type="text" placeholder="your message" />
          <button className={styles.sendBtn}>send message</button>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
