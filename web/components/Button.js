import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { text } = props;

  return <button className={styles.root}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;

//test
