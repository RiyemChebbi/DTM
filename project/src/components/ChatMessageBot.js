"use client";
import React from "react";
import styles from "../styles/ChatMessageBot.module.css";
import CsvDisplay from "./CsvDisplay"; // Import CsvDisplay for CSV messages

function ChatMessageBot({ message, userIcon, userInitials }) {
  return (
    <article className={styles.messageContainer}>
      <div className={styles.messageContent}>
        {/* User Avatar - Robot Icon */}
        <div className={styles.userAvatar} style={{ backgroundColor: "#C8D100" }}>
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C6.343 0 5 1.343 5 3V4H3C2.447 4 2 4.447 2 5V6C2 6.553 2.447 7 3 7H13C13.553 7 14 6.553 14 6V5C14 4.447 13.553 4 13 4H11V3C11 1.343 9.657 0 8 0ZM7 3C7 2.447 7.447 2 8 2C8.553 2 9 2.447 9 3V4H7V3ZM4 5H12V6H4V5ZM4 7H12C12.553 7 13 7.447 13 8V12C13 12.553 12.553 13 12 13H4C3.447 13 3 12.553 3 12V8C3 7.447 3.447 7 4 7ZM6 9H10V11H6V9Z"
              fill="#ECECF1"
            />
          </svg>
        </div>

        {/* Message Content */}
        {message.type === "text" ? (
          <p className={styles.messageText}>{message.content}</p>
        ) : (
          // For CSV messages, render the CsvDisplay component
          <div className={styles.csvContent}>
            <strong>""</strong>
            <CsvDisplay data={message.content} />
          </div>
        )}

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.thumbsUpButton} aria-label="Thumbs up">
            {/* Thumbs Up SVG */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.4 4.9V2.1C8.4 1.543 8.179 1.0089 7.785 0.6151C7.391 0.2212 6.857 0 6.3 0L3.5 6.3V13.9999H11.396C11.734 14.0037 12.061 13.8854 12.318 13.6667C12.576 13.448 12.745 13.1437 12.796 12.8099L13.762 6.51C13.792 6.3093 13.779 6.1044 13.722 5.9095C13.666 5.7146 13.567 5.5344 13.434 5.3812C13.301 5.2281 13.136 5.1057 12.951 5.0226C12.766 4.9395 12.565 4.8977 12.362 4.9H8.4ZM3.5 13.9999H1.4C1.029 13.9999 0.673 13.8524 0.41 13.5899C0.147 13.3273 0 12.9712 0 12.5999V7.7C0 7.3286 0.147 6.9726 0.41 6.71C0.673 6.4475 1.029 6.3 1.4 6.3H3.5"
                fill="#00A491"
              />
              <path
                d="M3.5 6.3L6.3 0C6.857 0 7.391 0.2212 7.785 0.6151C8.179 1.0089 8.4 1.543 8.4 2.1V4.9H12.362C12.565 4.8977 12.766 4.9395 12.951 5.0226C13.136 5.1057 13.301 5.2281 13.434 5.3812C13.567 5.5344 13.666 5.7146 13.722 5.9095C13.779 6.1044 13.792 6.3093 13.762 6.51L12.796 12.8099C12.745 13.1437 12.576 13.448 12.318 13.6667C12.061 13.8854 11.734 14.0037 11.396 13.9999H3.5M3.5 6.3V13.9999M3.5 6.3H1.4C1.029 6.3 0.673 6.4475 0.41 6.71C0.147 6.9726 0 7.3286 0 7.7V12.5999C0 12.9712 0.147 13.3273 0.41 13.5899C0.673 13.8524 1.029 13.9999 1.4 13.9999H3.5"
                stroke="white"
                strokeWidth="1.39999"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.thumbsDownButton} aria-label="Thumbs down">
            {/* Thumbs Down SVG */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.378 9.1001V11.9C5.378 12.457 5.599 12.9911 5.993 13.3849C6.387 13.7788 6.921 14 7.478 14L10.278 7.7001V0.000305176H2.382C2.044 -0.00359344 1.717 0.114752 1.459 0.333438C1.202 0.552124 1.032 0.856433 0.982 1.19023L0.016 7.49013C-0.015 7.69083 -0.001 7.89564 0.056 8.09054C0.112 8.28544 0.21 8.46567 0.344 8.61883C0.477 8.77199 0.642 8.89434 0.827 8.97744C1.012 9.06054 1.213 9.10237 1.416 9.10013H5.378ZM10.278 0.000305176H12.147C12.543 -0.00675964 12.928 0.131866 13.228 0.389969C13.529 0.648072 13.724 1.00756 13.778 1.40023V6.30013C13.724 6.69279 13.529 7.05228 13.228 7.31039C12.928 7.56849 12.543 7.70711 12.147 7.70013H10.278"
                fill="#E00025"
              />
              <path
                d="M10.278 7.7001L7.478 14C6.921 14 6.387 13.7788 5.993 13.3849C5.599 12.9911 5.378 12.457 5.378 11.9V9.1001H1.416C1.213 9.10237 1.012 9.06054 0.827 8.97744C0.642 8.89434 0.477 8.77199 0.344 8.61883C0.21 8.46567 0.112 8.28544 0.056 8.09054C-0.001 7.89564 -0.015 7.69083 0.016 7.49013L0.982 1.19023C1.032 0.856433 1.202 0.552124 1.459 0.333438C1.717 0.114752 2.044 -0.00359344 2.382 0.000305176H10.278M10.278 7.7001V0.000305176M10.278 7.7001H12.147C12.543 7.70711 12.928 7.56849 13.228 7.31039C13.529 7.05228 13.724 6.69279 13.778 6.30013V1.40023C13.724 1.00756 13.529 0.648072 13.228 0.389969C12.928 0.131866 12.543 -0.00675964 12.147 0.000305176H10.278"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ChatMessageBot;
