import LabelGroup from "../LabelGroup";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Contact.module.css";

function Contact(props) {
  const { heading, labelGroups, mapKey } = props;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>{heading}</h3>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <div style={{ paddingRight: "1rem" }}>
              <p>
                Want to arrange an assessment, receive more information on the services offered or
                ask a question?
              </p>
              <p className={styles.contactLine}>
                Contact Stuart using this form or at the email address below.
              </p>
              <div className={styles.emailContainer}>
                <p>Email</p>
                <p style={{ color: "#000", marginTop: "0.5rem" }}>stuart363lucas@btinternet.com</p>
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <form name="contact" action="/success" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.formRow}>
                <label for="yourname">Name</label>
                <input type="text" name="name" id="yourname" className={styles.formInput} />
              </div>
              <div className={styles.formRow}>
                <label for="youremail">Email</label>
                <input type="email" name="email" id="youremail" className={styles.formInput} />
              </div>
              <div className={styles.formRow}>
                <label for="yourmessage">Message</label>
                <textarea
                  type="text"
                  name="message"
                  id="yourmessage"
                  rows="4"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.sendButton}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
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
