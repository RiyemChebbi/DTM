"use client";
import React from "react";
import styles from "../styles/ChatMessage.module.css";

function FeedbackIcons() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.feedbackIcons}>
        <i
          className={`ti ti-thumb-up ${styles.i}`}
          aria-label="Thumbs up"
          role="button"
          tabIndex="0"
        />
        <i
          className={`ti ti-thumb-down ${styles.i2}`}
          aria-label="Thumbs down"
          role="button"
          tabIndex="0"
        />
      </div>
    </>
  );
}

export default FeedbackIcons;
