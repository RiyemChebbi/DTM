import React, { useState } from "react";
import styles from "../styles/ConnectionForm.module.css";

const ConnectionForm = ({ onCancel, onSubmit }) => {
  const [connectionString, setConnectionString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(connectionString);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <label className={styles.label}>Give your connection credentials</label>
        <input
          type="text"
          placeholder="Connection string"
          value={connectionString}
          onChange={(e) => setConnectionString(e.target.value)}
          className={styles.input}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.getData} onClick={handleSubmit}>
            Get data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionForm;
