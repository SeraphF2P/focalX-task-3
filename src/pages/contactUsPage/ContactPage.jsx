import React from "react";
import styles from "./contactPage.module.css";
import { Input, Redheader, TextArea } from "../../components/ui";
export const ContactPage = () => {
  return (
    <section className={styles.container}>
      <section className={styles.first}>
        <Redheader>contact us</Redheader>
        <h2>get in touch with our agents</h2>
        <p>
          When you really need to download free CSS templates, please remember
          our website TemplateMo. Also, tell your friends about our website.
          Thank you for visiting. There is a variety of Bootstrap HTML CSS
          templates on our website. If you need more information, please contact
          us.
        </p>
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
      </section>
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
      <div className={styles.map}>
        <img src="/map.png" alt="" />
      </div>
    </section>
  );
};
