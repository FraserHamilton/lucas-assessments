import PropTypes from "prop-types";
import React from "react";
import styles from "./Step.module.css";

function Step(props) {
  const { label, icon } = props;
  const Icon = icon;

  return (
    <div className={styles.root}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

Step.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
};

export default Step;
