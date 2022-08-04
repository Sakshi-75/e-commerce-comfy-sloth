import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h5>
        © 2022<span> ComfySloth </span>
      </h5>
      <h5>All rights reserved</h5>
    </footer>
  );
};

export default Footer;
