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
      <SimpleBlockContent blocks={text} />
      <div className={styles.footer}>
        <div>
          <Button text="Arrange Asssessment" />
        </div>
        <div className={styles.steps}>
          <Step icon={Envelope} label="Contact" />
          <Step icon={Calendar} label="Book" />
          <Step icon={Clipboard} label="Assess" />
          <Step icon={Chart} label="Results" />
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
