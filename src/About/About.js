import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => (
  <div className={styles.About}>
    <div className={styles.header}>
      <section className={"section-center"}>
        <h1>
          <Link to={"/"} className={styles.home}>
            home
          </Link>
          / about
        </h1>
      </section>
    </div>
    <div className={styles.body}>
      <img
        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
        className={styles.image}
      ></img>
      <div className={styles.text}>
        <h3 className={styles.title}>Our Story</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
        delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
        Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt
        sequi blanditiis est exercitationem molestiae delectus saepe odio
        eligendi modi porro eaque in libero minus unde sapiente consectetur
        architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum
        totam velit saepe sed quos similique amet. Ex, voluptate accusamus
        nesciunt totam vitae esse iste.
      </div>
    </div>
  </div>
);

export default About;
