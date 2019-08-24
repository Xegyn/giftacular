import React from "react";
import { connect } from "react-redux";
import { openFullScreen } from "../redux/actions";
import store from "../redux/store";
import styles from "./Gif.module.scss";

const Gif: React.FC = ({ url, alt, index }: any) => {
  return (
    <div className={styles["image-container"]}>
      <img
        src={url}
        className={styles.image}
        alt={alt}
        onClick={() => {
          store.dispatch(openFullScreen(index));
        }}
      />
    </div>
  );
};

export default connect(
  null,
  null
)(Gif);
