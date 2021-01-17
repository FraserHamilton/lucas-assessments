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
  const { heading, backgroundImage, cardHeading, cardText } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto("format").url()}")`,
      }
    : {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero} style={style}>
        <div className={styles.content}>
          <h1 className={styles.title}>{heading}</h1>
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{cardHeading}</h3>
        <div className={styles.cardText}>
          {cardText && <SimpleBlockContent blocks={cardText} />}
        </div>
        <Link>
          <a>
            <div className={styles.cardButton}>
              <ArrowIcon style={{ display: "block" }} />
            </div>
          </a>
        </Link>
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
