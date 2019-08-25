import React from "react";
import { closeFullScreen } from "../redux/actions";
import store from "../redux/store";
import styles from "./FullScreenGif.module.scss";

type FullScreenGifProps = {
  gif: any;
};

const FullScreenGif: React.FC<FullScreenGifProps> = ({
  gif
}: FullScreenGifProps) => {
  return (
    <div className="container">
      <button
        type="button"
        className={`${styles["back-button"]} btn`}
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

export default FullScreenGif;
