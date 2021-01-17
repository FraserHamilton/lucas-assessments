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
        {labelGroups && (
          <div className={styles.labelGroups}>
            {labelGroups.map((labelGroup) => (
              <LabelGroup {...labelGroup} key={labelGroup._key} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.mapContainer}>
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
