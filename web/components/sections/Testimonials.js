import React, { useRef, useState } from "react";

import ArrowIcon from "../icons/Arrow";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Testimonial from "../Testimonial";
import styles from "./Testimonials.module.css";

function Testimonials(props) {
  const { heading, testimonials } = props;

  const sliderRef = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSelectedIndex(next),
    responsive: [
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.carouselContainer}>
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((t, i) => (
            <Testimonial {...t} selected={selectedIndex === i} />
          ))}
        </Slider>
        <div className={styles.buttonGroup}>
          <button className={styles.flip} onClick={() => sliderRef.current.slickPrev()}>
            <ArrowIcon />
          </button>
          <button onClick={() => sliderRef.current.slickNext()}>
            <ArrowIcon />
          </button>
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
