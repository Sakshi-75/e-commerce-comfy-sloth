import React, { useState } from "react";
import styles from "./ProductsPage.module.css";
import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";
import ProductsList from "../ProductsList/ProductsList";

const ProductsPage = () => {
  let [count, setCount] = useState(0);
  let [sortby, setSortby] = useState("price asc");
  return (
    <div className={styles.ProductsPage}>
      <div className={styles.header}>
        <section className={"section-center"}>
          <h1>
            <Link to={"/"} className={styles.home}>
              home
            </Link>
            / products
          </h1>
        </section>
      </div>
      <section className={styles.body}>
        <div>
          <Filters />
        </div>
        <div>
          <header className={styles.listHeader}>
            <div>
              <button></button>
              <button></button>
            </div>
            <p>{count} products found</p>
            <hr />
            <div className={styles.sort}>
              <p>Sort By</p>
              <select onChange={(e) => setSortby(e.target.value)}>
                <option value="price asc">Price(Lowest)</option>
                <option value="price desc">Price(Highest)</option>
                <option value="name asc">Name(A-Z)</option>
                <option value="name desc">Name(Z-A)</option>
              </select>
            </div>
          </header>
          <section>
            <ProductsList setCount={setCount} sortby={sortby} />
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
