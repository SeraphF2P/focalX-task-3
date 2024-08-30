import React from "react";
import { useSearchParams } from "react-router-dom";
import { QueryBtn, Redheader, ScheduleAVisit } from "../ui";
import styles from "./bestDeal.module.css";

const deals = {
  appartment: {
    header: "extra info about property",
    p1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
         libero sapiente quas placeat voluptatibus soluta vel esse! Autem
         quaerat consectetur sit possimus quam officia veniam`,
    p2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
         libero sapiente quas placeat voluptatibus soluta vel esse! Autem
         quaerat consectetur sit possimus quam officia veniam`,
    image: "/deal-01.jpg",
    privilage: [
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
    ],
  },
  "villa house": {
    header: "detail info about villa",
    p1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
         libero sapiente quas placeat voluptatibus soluta vel esse! Autem
         quaerat consectetur sit possimus quam officia veniam`,
    p2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
         libero sapiente quas placeat voluptatibus soluta vel esse! Autem
         quaerat consectetur sit possimus quam officia veniam`,
    image: "/deal-02.jpg",
    privilage: [
      {
        name: "total flat space",
        value: "250 m2",
      },
      {
        name: "floor number",
        value: "26th",
      },
      {
        name: "number of rooms",
        value: "5",
      },
      {
        name: "parking available",
        value: "yes",
      },
      {
        name: "payment process",
        value: "bank",
      },
    ],
  },
  penthouse: {
    header: "extra info about penthouse",
    p1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
         libero sapiente quas placeat voluptatibus soluta vel esse! Autem
         quaerat consectetur sit possimus quam officia veniam`,
    p2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
         libero sapiente quas placeat voluptatibus soluta vel esse! Autem
         quaerat consectetur sit possimus quam officia veniam`,
    image: "/deal-03.jpg",
    privilage: [
      {
        name: "total flat space",
        value: "320 m2",
      },
      {
        name: "floor number",
        value: "34th",
      },
      {
        name: "number of rooms",
        value: "6",
      },
      {
        name: "parking available",
        value: "yes",
      },
      {
        name: "payment process",
        value: "bank",
      },
    ],
  },
};
export const BestDeal = () => {
  const queryKey = "best-deal";
  const [searchParams] = useSearchParams(
    new URLSearchParams({
      [queryKey]: "appartment",
    })
  );
  const queryValue = searchParams.get(queryKey);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.header}>
            <Redheader>best deal</Redheader>
            <h2>find your best deal right now</h2>
          </div>
          <div className={styles.btns}>
            <QueryBtn selected queryKey={queryKey} value={"appartment"}>
              appartment
            </QueryBtn>
            <QueryBtn queryKey={queryKey} value={"villa house"}>
              villa house
            </QueryBtn>
            <QueryBtn queryKey={queryKey} value={"penthouse"}>
              penthouse
            </QueryBtn>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.deal}>
            {deals[queryValue].privilage.map((desc, index) => {
              return (
                <div key={index}>
                  <p>{desc.name}</p>
                  <p>{desc.value}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.card}>
            <img
              src={deals[queryValue].image}
              alt={`best ${queryValue} deal`}
            />
            <article className={styles.articale}>
              <h3>{deals[queryValue].header}</h3>
              <p>{deals[queryValue].p1}</p>
              <p>{deals[queryValue].p2}</p>
              <ScheduleAVisit />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
