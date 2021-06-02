import PropTypes from "prop-types";
import React from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Testimonial.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Testimonial(props) {
  const { name, tag, image, index, selected, setSelectedIndex } = props;

  return (
    <div className={styles.root} onClick={() => setSelectedIndex(index)}>
      <div className={`${styles.attribution} ${selected && styles.selected}`}>
        <img src={urlFor(image).width(60).auto("format").url()} alt={`Headshot Of ${name}`}></img>
        <div>
          <p>
            <span>{name}</span>
          </p>
          <p>{tag}</p>
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
