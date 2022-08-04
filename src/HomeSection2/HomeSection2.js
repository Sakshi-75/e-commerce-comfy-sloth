import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeSection2.module.css";

const HomeSection2 = () => {
  return (
    <section className={styles.HomeSection2}>
      <div className={styles.title}>
        <h1>featured products</h1>
      </div>
      <div className={"section-center " + styles.featured}>
        <article className={styles.card}>
          <div className={styles.container}>
            <img src="../assets/EntertainmentCenter.jfif" />
          </div>
          <footer>
            <h5>entertainment center</h5>
            <p>$599.99</p>
          </footer>
        </article>
        <article className={styles.card}>
          <div className={styles.container}>
            <img src="../assets/HighBack.jfif" />
          </div>
          <footer>
            <h5>high-back bench</h5>
            <p>$399.99</p>
          </footer>
        </article>
        <article className={styles.card}>
          <div className={styles.container}>
            <img src="../assets/ModernBook.jfif" />
          </div>
          <footer>
            <h5>modern bookshelf</h5>
            <p>$319.99</p>
          </footer>
        </article>
      </div>
      <Link to="/products" className={"btn " + styles.btn}>
        all products
      </Link>
    </section>
  );
};

export default HomeSection2;
