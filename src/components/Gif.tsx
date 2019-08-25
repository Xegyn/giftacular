import React from "react";
import { openFullScreen } from "../redux/actions";
import store from "../redux/store";
import styles from "./Gif.module.scss";

type GifProps = {
  url: string;
  alt: string;
  index: number;
};

const Gif: React.FC<GifProps> = ({ url, alt, index }: GifProps) => {
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

export default Gif;
