import LabelGroup from "../LabelGroup";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Contact.module.css";

function Contact(props) {
  const { heading, labelGroups, mapKey } = props;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>{heading}</h2>
        <div className={styles.labelGroups}>
          <LabelGroup {...labelGroups[0]} key={labelGroups[0]._key} />
          <LabelGroup {...labelGroups[1]} key={labelGroups[1]._key} />
        </div>
      </div>
      <div className={styles.mapContainer}>
        <LabelGroup {...labelGroups[2]} key={labelGroups[2]._key} />
        <iframe
          className={styles.map}
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDbzTSvhcymlgy7G_Wsaet9VtnkbHvpVrQ&q=${mapKey}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

Contact.propTypes = {
  heading: PropTypes.string,
  mapKey: PropTypes.string,
  labelGroups: PropTypes.arrayOf(PropTypes.object),
};

export default Contact;
