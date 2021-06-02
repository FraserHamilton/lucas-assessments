import ArrowIcon from "../icons/Arrow";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import SimpleBlockContent from "../SimpleBlockContent";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Hero.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero(props) {
  const { heading, backgroundImage } = props;

  // const style = backgroundImage
  //   ? {
  //       backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto("format").url()}")`,
  //     }
  //   : { backgroundColor: "#fff" };

  return (
    <div className={styles.hero}>
      <img className={styles.letters} src={urlFor(backgroundImage)} alt="Alphabet Background" />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Dyslexia Assessments
            <br />
            Throughout{" "}
            <span className={styles.accentText}>
              Edinburgh <br /> And The Lothians
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  cardHeading: PropTypes.string,
  cardText: PropTypes.array,
};

export default Hero;
