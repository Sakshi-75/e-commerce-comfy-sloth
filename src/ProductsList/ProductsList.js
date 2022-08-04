import React from "react";
import styles from "./ProductsList.module.css";
import { DUMMY_DATA } from "../Data/DummyData";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = (props) => {
  let displayProductsList = DUMMY_DATA.sort((a, b) => {
    switch (props.sortby) {
      case "price asc":
        return a.price > b.price ? 1 : -1;
      case "price desc":
        return a.price < b.price ? 1 : -1;
      case "name asc":
        return a.name > b.name ? 1 : -1;
      case "name desc":
        return a.name < b.name ? 1 : -1;
      default:
        return 0;
    }
  });
  props.setCount(displayProductsList.length);
  return (
    <div className={styles.ProductsList}>
      {displayProductsList.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
