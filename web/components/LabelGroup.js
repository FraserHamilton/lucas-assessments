import PropTypes from "prop-types";
import React from "react";
import SimpleBlockContent from "./SimpleBlockContent";
import styles from "./LabelGroup.module.css";

function labelGroup(props) {
  const { label, text } = props;
  return (
    <div className={styles.root}>
      <h3>{label}</h3>
      <SimpleBlockContent blocks={text} />
    </div>
  );
}

labelGroup.propTypes = {
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
};

export default labelGroup;
