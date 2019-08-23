import React from "react";
import { connect } from "react-redux";
import styles from "./Gif.module.scss";

const Gif: React.FC = ({ url }: any) => {
  return (
    <div className={styles["image-container"]}>
      <img src={url} className={styles.image} />
    </div>
  );
};

export default connect(
  null,
  null
)(Gif);
