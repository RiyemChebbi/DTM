"use client";
import React from "react";
import styles from "../styles/Start.module.css";
import ChatContainer from "./ChatContainer";  // Keep your ChatContainer to display the conversation

const SecondContent = ({ currentMessages, showWelcomeMessage, onMessageSent }) => {
  return (
    <main className={styles.mainContent}>
      {/* Conditionally render the welcome message */}
      {showWelcomeMessage && (
        <div className={styles.welcomeMessage}>
          <h1>Welcome to the HUTgpt</h1>
          <p>Start by typing a message.</p>
        </div>
      )}

      {/* Render the ChatContainer with currentMessages */}
      <ChatContainer messages={currentMessages} onMessageSent={onMessageSent} />

      {/* Footer */}
      <footer className={styles.footerText}>
        <span className={styles.normalText}>HUT</span>
        <a
          href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          className={styles.linkText}
          target="_blank"
          rel="noopener noreferrer"
        >
          GPT March 1st Version
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

export default SecondContent;