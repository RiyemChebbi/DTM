"use client";
import React, { useState } from "react";
import styles from "../styles/ChatInput.module.css";

const ChatInput = ({ message, setMessage, handleSendMessage, handleSendFile }) => {
  const [file, setFile] = useState(null);
  const [isFileMode, setIsFileMode] = useState(false);

  // Function to refresh chat input
  const refreshChatInput = () => {
    setFile(null); // Clear selected file
    setMessage(""); // Clear message input
    setIsFileMode(false); // Switch back to text mode
  };

  // Function to parse file data
  const parseFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        const rows = text.split("\n").map((row) => row.split(","));
        resolve(rows);
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      try {
        const data = await parseFile(selectedFile);
        handleSendFile(data); // Send parsed data to parent component
        refreshChatInput(); // Reset the input after sending the file
      } catch (error) {
        console.error("Error parsing file", error);
      }
    }
  };

  const handleSendMessageClick = () => {
    if (message.trim()) {
      handleSendMessage(message); // Send the message
      refreshChatInput(); // Clear input field after sending
    }
  };

  const toggleMode = () => {
    setIsFileMode(!isFileMode); // Toggle between file mode and message mode
  };

  return (
    <section className={styles.inputContainer}>
      <div className={styles.inputFieldWrapper}>
        <div className={styles.inputField}>
          {!isFileMode ? (
            <input
              type="text"
              value={message} // Use message from parent
              onChange={(e) => setMessage(e.target.value)} // Sync input field
              placeholder="Type your message..."
              aria-label="Message input"
              className={styles.textInput}
            />
          ) : (
            <input
              type="file"
              onChange={handleFileChange}
              aria-label="Select file"
              className={styles.textInput}
            />
          )}
          <div className={styles.inputActions}>
            <button
              className={styles.iconButton}
              onClick={toggleMode}
              aria-label={isFileMode ? "Switch to Text" : "Switch to File"}
            >
              <i className={isFileMode ? "fas fa-comment-dots" : "fas fa-file"}></i>
            </button>
            <button
              className={styles.sendButton}
              onClick={isFileMode ? () => {} : handleSendMessageClick}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane"></i> {/* Paper plane icon for sending */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInput;
