import React from "react";
import styles from "../styles/ChatContainerBot.module.css";
import ChatMessageBot from "../components/ChatMessageBot";

function ChatContainerBot({ messages }) {
  // Filter bot messages based on sender
  const botMessages = messages.filter((msg) => msg.sender === "bot");

  return (
    <div className={styles.chatContainerBot}>
      {/* Display bot messages */}
      {botMessages.map((message, index) => (
        <ChatMessageBot key={index} message={message} />
      ))}
    </div>
  );
}

export default ChatContainerBot;
