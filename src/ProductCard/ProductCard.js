import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <article className={styles.ProductCard}>
      <div className={styles.container}>
        <img src={props.image} alt={props.name} className={styles.image} />
      </div>
      <footer className={styles.footer}>
        <h5>{props.name}</h5>
        <p>{props.price}</p>
      </footer>
    </article>
  );
};

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
