import React, { useRef, useState } from "react";

import ArrowIcon from "../icons/Arrow";
import PropTypes from "prop-types";
import SimpleBlockContent from "../SimpleBlockContent";
import Slider from "react-slick";
import Testimonial from "../Testimonial";
import styles from "./Testimonials.module.css";

function Testimonials(props) {
  const { heading, testimonials } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>{heading}</h3>
        <div className={styles.content}>
          <div className={styles.triggers}>
            {testimonials.map((t, i) => (
              <div>
                <Testimonial
                  {...t}
                  selected={selectedIndex === i}
                  index={i}
                  setSelectedIndex={setSelectedIndex}
                />
                {selectedIndex === i && (
                  <div className={styles.accTextContainer}>
                    <SimpleBlockContent blocks={testimonials[selectedIndex].text} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.textContainer}>
            <SimpleBlockContent blocks={testimonials[selectedIndex].text} />
          </div>
        </div>
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  heading: PropTypes.string,
  testimonials: PropTypes.arrayOf(PropTypes.object),
};

export default Testimonials;
