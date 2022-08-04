import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeSection1.module.css";

const HomeSection1 = () => (
  <section className={styles.HomeSection1 + " section-center"}>
    <article>
      <h1>Design Your Comfort Zone</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed
        omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam
        odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
      </p>
      <Link to="/products" className="btn">
        SHOP NOW
      </Link>
    </article>
    <article className={styles["img-container"]}>
      <img
        src="../assets/homeSection1Middle.jpeg"
        alt="nice table"
        className={styles["main-img"]}
      />
      <img
        src="../assets/homeSection1Front.jpeg"
        alt="old man"
        className={styles["accent-img"]}
      />
    </article>
  </section>
);

HomeSection1.propTypes = {};

HomeSection1.defaultProps = {};

export default HomeSection1;
