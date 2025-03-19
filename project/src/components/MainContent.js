"use client";
import React from "react";
import styles from "../styles/MainContent.module.css";
 

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.title}>HUTGPT</h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4939ac4d80eb4520ec59cc795ac2c8f64d32447aa48a9d4d61dcdd0b68c66d7b?placeholderIfAbsent=true&apiKey=57eca8cfff544a5ab5b8a6e082a851c7"
        alt="HUTGPT Logo"
        className={styles.logo}
      />
      <section className={styles.welcomeMessage}>
        Hello! I'm your Data Transformation Assistant. Need to clean, format, or
        extract insights from your data? Upload your dataset, and let's get
        started!"
      </section>
       
       
      <footer className={styles.footerText}>
        <span className={styles.normalText}>HUT</span>
        <a
          href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          className={styles.linkText}
          target="_blank"
          rel="noopener noreferrer"
        >
          GPT March 1stVersion
        </a>
        <span className={styles.normalText}>
          . Our goal is to make you access Hutchinson's DATA PLATFORM, load your
          data, transform it, update or insert.
        </span>
        <br />
      </footer>
    </main>
  );
};

export default MainContent;
