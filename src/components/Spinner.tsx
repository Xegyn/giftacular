import React from "react";
import styles from "./Spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={`${styles.spinner} la-ball-clip-rotate`}>
      <div></div>
    </div>
  );
};

export default Spinner;
