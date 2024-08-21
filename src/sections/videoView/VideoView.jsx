import React from "react";
import styles from "./videoView.module.css";
import { Icon } from "../../components/Icon";
import Redheader from "../../components/redHeader/Redheader";
const experiances = [
  {
    id: crypto.randomUUID(),
    num: "34",
    paragraph: "building finished now",
  },
  {
    id: crypto.randomUUID(),
    num: "12",
    paragraph: "years experience",
  },
  {
    id: crypto.randomUUID(),
    num: "24",
    paragraph: "awards won 2023",
  },
];
const VideoView = () => {
  return (
    <section className={styles.section}>
      <div className={styles.first}>
        <img src="/video-view-background.jpg" alt="background image" />
        <Redheader>view video</Redheader>
        <h2>get closer view & different feelng</h2>
        <div>
          <img src="/video-frame.jpg" alt="" />
          <Icon.videoStart className={styles.playIcon} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.second}>
          {experiances.map((exp) => {
            return (
              <div key={exp.id} className={styles.card}>
                <p>{exp.num}</p>
                <p>{exp.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoView;
