import React from "react";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className="logo">
          <h4 className="m-0">Giftacular</h4>
        </div>
        <input
          type="text"
          className="search-text"
          placeholder="Search for..."
        />
        <button type="button" className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
