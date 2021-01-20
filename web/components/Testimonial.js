import PropTypes from "prop-types";
import React from "react";
import SimpleBlockContent from "./SimpleBlockContent";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Testimonial.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Testimonial(props) {
  const { text, name, tag, image, selected } = props;

  return (
    <div className={`${styles.root} ${selected ? styles.left : styles.right}`}>
      <div className={styles.container}>
        <div className={styles.message}>
          <SimpleBlockContent blocks={text} />
        </div>
        <div className={styles.attribution}>
          <img src={urlFor(image).width(80).auto("format").url()}></img>
          <div>
            <p>
              <span>{name}</span>
            </p>
            <p>{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  image: PropTypes.string,
  selected: PropTypes.bool,
};

export default Testimonial;
