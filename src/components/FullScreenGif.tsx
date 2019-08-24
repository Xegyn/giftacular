import React from "react";
import { connect } from "react-redux";
import { closeFullScreen } from "../redux/actions";
import store from "../redux/store";
import styles from "./FullScreenGif.module.scss";

const FullScreenGif: React.FC = ({ gif }: any) => {
  return (
    <div className="container">
      <button
        type="button"
        className={styles["back-button"]}
        onClick={() => store.dispatch(closeFullScreen())}
      >
        &lt; Back
      </button>
      <img
        src={gif.images.original.url}
        alt={gif.title}
        className={styles.image}
      />
    </div>
  );
};

export default connect(
  null,
  null
)(FullScreenGif);
