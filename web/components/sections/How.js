import Button from "../Button";
import Calendar from "../icons/Calendar";
import Chart from "../icons/Chart";
import Clipboard from "../icons/Clipboard";
import Divider from "../Divider";
import Envelope from "../icons/Envelope";
import PropTypes from "prop-types";
import React from "react";
import SimpleBlockContent from "../SimpleBlockContent";
import Step from "../Step";
import styles from "./How.module.css";

function How(props) {
  const { heading, text, buttonText } = props;

  return (
    <div className={styles.root}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.content}>
        <SimpleBlockContent blocks={text} />
        <div className={styles.footer}>
          <div className={styles.button}>
            <Button text="Arrange Asssessment" />
          </div>
          <div className={styles.steps}>
            <div className={styles.row}>
              <div className={styles.step}>
                <div className={styles.iconContainer}>
                  <Envelope className={styles.icon} />
                </div>
              </div>
              <Divider />
              <div className={styles.step}>
                <div className={styles.iconContainer}>
                  <Calendar className={styles.icon} />
                </div>
              </div>
              <Divider />
              <div className={styles.step}>
                <div className={styles.iconContainer}>
                  <Clipboard className={styles.icon} />
                </div>
              </div>
              <Divider />
              <div className={styles.step}>
                <div className={styles.iconContainer}>
                  <Chart className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.labels}`}>
              <div className={styles.step}>
                <p className={styles.label}>Contact</p>
              </div>
              <div className={styles.step}></div>
              <div className={styles.step}>
                <p className={styles.label}>Book</p>
              </div>
              <div className={styles.step}></div>
              <div className={styles.step}>
                <p className={styles.label}>Assess</p>
              </div>
              <div className={styles.step}></div>
              <div className={styles.step}>
                <p className={styles.label}>Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

How.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  buttonText: PropTypes.string,
};

export default How;
