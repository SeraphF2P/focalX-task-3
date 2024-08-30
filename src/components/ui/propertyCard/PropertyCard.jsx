import React from "react";
import styles from "./propertyCard.module.css";
import { useNavigate } from "react-router-dom";

export const PropertyCard = (props) => {
  const nav = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={props.image} alt={props.type} />
      </div>
      <div className={styles.cardHead}>
        <p className={styles.type}>{props.type}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
      <p className={styles.address}>{props.address}</p>
      <div className={styles.privilage}>
        <div>
          <p>bedrooms:</p>
          <p>{props.bedrooms}</p>
        </div>
        <div>
          <p>bathrooms:</p>
          <p>{props.bathrooms}</p>
        </div>
        <div>
          <p>area:</p>
          <p>{props.area}</p>
        </div>
        <div>
          <p>floor:</p>
          <p>{props.floor}</p>
        </div>
        <div>
          <p>parking:</p>
          <p>{props.parking}</p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          onClick={() => nav(`/single-property?villaId=${props.id}`)}
          className={styles.btn}
        >
          schedule a visit
        </button>
      </div>
    </div>
  );
};
