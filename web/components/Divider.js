import React from "react";
import styles from "./Divider.module.css";

function Divider() {
  return (
    <div className={styles.root}>
      <hr className={styles.line}></hr>
      <div className={styles.vertical}></div>
    </div>
  );
}

export default Divider;
