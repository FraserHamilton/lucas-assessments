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
  // const style = backgroundImage
  //   ? {
  //       backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto("format").url()}")`,
  //     }
  //   : { backgroundColor: "#fff" };
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.content}>
          <div className={`${styles.column} ${styles.rightPad}`}>
            <div className={styles.iconContainer}>
              <Envelope className={styles.icon} />
            </div>
            <h3 className={styles.title}>Contact</h3>
            <p>
              If you wish to arrange an asessment to look at the possibility of dyslexia (SpLD) you
              can get in contact using the form or email at the end of this webpage.
            </p>
          </div>
          <div className={`${styles.column} ${styles.rightPad}`}>
            <div className={styles.iconContainer}>
              <Clipboard className={styles.icon} />
            </div>
            <h3 className={styles.title}>Assessment</h3>
            <p>
              An assessment usually takes about 3 hours. The assessment is carried out on a
              one-to-one basis. All children under the age of 16 must be accompanied by a
              parent/carer. The cost of the assessment is £450, and this can be paid via bank
              trasnfer on the day of the assessment.
            </p>
          </div>
          <div className={styles.column}>
            <div className={styles.iconContainer}>
              <Chart className={styles.icon} />
            </div>
            <h3 className={styles.title}>Results</h3>
            <p>
              A short feedback session can take place on completion of the assessment and on receipt
              of the report, a follow-up phone call can be made if you have any questions. The
              report produced details a profile of strengths and weaknesses, with a list of
              recommendations.
            </p>
          </div>

          {/* <SimpleBlockContent blocks={text} />
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
          </div>  */}
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
