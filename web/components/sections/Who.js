import Button from "../Button";
import PropTypes from "prop-types";
import React from "react";
import SimpleBlockContent from "../SimpleBlockContent";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Who.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Who(props) {
  const { heading, subheading, contentText, personImage, sigImage, accImage, tagline } = props;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>{heading}</h3>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{subheading}</h2>
            <p className={styles.footerText}>{tagline}</p>
            <SimpleBlockContent blocks={contentText} />
            <div className={styles.images}>
              {/* <img className={styles.signatureImage} src={urlFor(sigImage)} /> */}
              <img className={styles.accImage} src={urlFor(accImage)} />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.personImage} src={urlFor(personImage)} />
          </div>
        </div>
        {/* <div className={styles.tiledBg} style={style}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div>
              <h3 className={styles.heading}>{heading}</h3>
              <p className={styles.tag}>{tagline}</p>
            </div>
            <img className={styles.personImageMobile} src={urlFor(personImage)} />
            <div className={styles.buttonContainer}>
              <div className={styles.buttonInner}>
                <Button text={buttonText} />
              </div>
            </div>
          </div>
          <img className={styles.personImage} src={urlFor(personImage)} />
        </div>
      </div> */}
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
