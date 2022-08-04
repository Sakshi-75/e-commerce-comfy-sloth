import React from "react";
import styles from "./HomeSection4.module.css";

const HomeSection4 = () => {
  return (
    <section className={styles.HomeSection4}>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className={styles["contact-form"]}>
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeSection4;
