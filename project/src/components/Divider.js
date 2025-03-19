import React from "react";
import styles from "../styles/Divider.module.css";

function Divider({ text }) {
  return (
    <div className={styles.divider}>
      <span className={styles.dividerLine} />
      <span className={styles.dividerText}>{text}</span>
      <span className={styles.dividerLine} />
    </div>
  );
}

export default Divider;
