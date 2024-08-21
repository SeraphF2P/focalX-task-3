import React from "react";
import styles from "./properties.module.css";
import Redheader from "../../components/redHeader/Redheader";
import Btn from "../../components/btn/Btn";

const cards = [
  {
    id: crypto.randomUUID(),
    type: "luxury villa",
    price: "$2.264.000",
    address: "18 new street miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
    image: "/property-01.jpg",
  },
  {
    id: crypto.randomUUID(),
    type: "luxury villa",
    price: "$1.180.000",
    address: "54 mid street florida, OR 27001",
    bedrooms: 6,
    bathrooms: 5,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
    image: "/property-02.jpg",
  },
  {
    id: crypto.randomUUID(),
    type: "luxury villa",
    price: "$1.460.000",
    address: "26 old street miami, OR 38540",
    bedrooms: 5,
    bathrooms: 4,
    area: "225m2",
    floor: 3,
    parking: "10 spots",
    image: "/property-03.jpg",
  },
  {
    id: crypto.randomUUID(),
    type: "apartment",
    price: "$584.000",
    address: "12 new street miami, OR 12650",
    bedrooms: 4,
    bathrooms: 3,
    area: "125m2",
    floor: "25th",
    parking: "2 cars",
    image: "/property-04.jpg",
  },
  {
    id: crypto.randomUUID(),
    type: "penthouse",
    price: "$925.600",
    address: "24 beach street miami, OR 42680",
    bedrooms: 4,
    bathrooms: 4,
    area: "180m2",
    floor: "28th",
    parking: "2 cars",
    image: "/property-05.jpg",
  },
  {
    id: crypto.randomUUID(),
    type: "modern condo",
    price: "$450.000",
    address: "22 new street portland, OR 16540",
    bedrooms: 3,
    bathrooms: 2,
    area: "165m2",
    floor: "26th",
    parking: "3 cars",
    image: "/property-06.jpg",
  },
];
const Properties = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Redheader>properteis</Redheader>
        <h2>we provide the best property you like</h2>
        <section className={styles.gallery}>
          {cards.map((card) => {
            return (
              <div key={card.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={card.image} alt={card.type} />
                </div>
                <div className={styles.cardHead}>
                  <p className={styles.type}>{card.type}</p>
                  <p className={styles.price}>{card.price}</p>
                </div>
                <p className={styles.address}>{card.address}</p>
                <div className={styles.privilage}>
                  <div>
                    <p>bedrooms:</p>
                    <p>{card.bedrooms}</p>
                  </div>
                  <div>
                    <p>bathrooms:</p>
                    <p>{card.bathrooms}</p>
                  </div>
                  <div>
                    <p>area:</p>
                    <p>{card.area}</p>
                  </div>
                  <div>
                    <p>floor:</p>
                    <p>{card.floor}</p>
                  </div>
                  <div>
                    <p>parking:</p>
                    <p>{card.parking}</p>
                  </div>
                </div>
                <div className={styles.btnContainer}>
                  <button className={styles.btn}>schedule a visit</button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Properties;
