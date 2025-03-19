import React from "react";
import styles from "../styles/InputField.module.css";

function InputField({ label, type = "text", ...props }) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.inputLabel}>{label}</label>
      <input type={type} className={styles.inputField} {...props} />
    </div>
  );
}

export default InputField;
