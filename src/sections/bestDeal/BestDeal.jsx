import React from "react";
import styles from "./bestDeal.module.css";
import Redheader from "../../components/redHeader/Redheader";
import Btn from "../../components/btn/Btn";
import { ScheduleAVisit } from "../../components/scheduleAVisit/ScheduleAVisit";
const deal = [
  {
    name: "total flat space",
    value: "185 m2",
  },
  {
    name: "floor number",
    value: "26th",
  },
  {
    name: "number of rooms",
    value: "4",
  },
  {
    name: "parking available",
    value: "yes",
  },
  {
    name: "payment process",
    value: "bank",
  },
];
const BestDeal = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.header}>
            <Redheader>best deal</Redheader>
            <h2>find your best deal right now</h2>
          </div>
          <div className={styles.btns}>
            <Btn data-theme="primary">apportment</Btn>
            <Btn>villa house</Btn>
            <Btn>penthouse</Btn>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.deal}>
            {deal.map((desc, index) => {
              return (
                <div key={index}>
                  <p>{desc.name}</p>
                  <p>{desc.value}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.card}>
            <img src="/deal-01.jpg" alt="" />
            <articale className={styles.articale}>
              <h3>extra info about property</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                libero sapiente quas placeat voluptatibus soluta vel esse! Autem
                quaerat consectetur sit possimus quam officia veniam
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                libero sapiente quas placeat voluptatibus soluta vel esse! Autem
                quaerat consectetur sit possimus quam officia veniam
              </p>
              <ScheduleAVisit />
            </articale>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDeal;
