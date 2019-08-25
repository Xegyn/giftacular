import React from "react";
import { openFullScreen } from "../redux/actions";
import store from "../redux/store";
import styles from "./Gif.module.scss";

type GifProps = {
  url: string;
  alt: string;
  index: number;
};

const TRIGGER_SEARCH_KEYS = ["Enter", "Return"];

const handleKeyPress = (event: React.KeyboardEvent, index: number) => {
  if (TRIGGER_SEARCH_KEYS.includes(event.key)) {
    store.dispatch(openFullScreen(index));
  }
};

const Gif: React.FC<GifProps> = ({ url, alt, index }: GifProps) => {
  return (
    <div className={styles["image-container"]}>
      <img
        src={url}
        className={styles.image}
        alt={alt}
        tabIndex={0}
        role="button"
        onKeyPress={event => {
          handleKeyPress(event, index);
        }}
        onClick={() => {
          store.dispatch(openFullScreen(index));
        }}
      />
    </div>
  );
};

export default Gif;
