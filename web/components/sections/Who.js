import Button from "../Button";
import PropTypes from "prop-types";
import React from "react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Who.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Who(props) {
  const { heading, backgroundImage, tagline, buttonText, personImage } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(400).auto("format").url()}")`,
      }
    : {};

  return (
    <div className={styles.root}>
      <div className={styles.tiledBg} style={style}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div>
              <h3 className={styles.heading}>{heading}</h3>
              <p className={styles.tag}>{tagline}</p>
            </div>
            <div>
              <Button text={buttonText} />
            </div>
          </div>
          <img className={styles.personImage} src={urlFor(personImage)} />
        </div>
      </div>
    </div>
  );
}

Who.propTypes = {
  heading: PropTypes.string,
  tagline: PropTypes.string,
  backgroundImage: PropTypes.object,
  personImage: PropTypes.object,
  buttonText: PropTypes.string,
};

export default Who;
