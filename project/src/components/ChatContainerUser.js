import React from "react";
import ChatInput from "./ChatInput";
import styles from "../styles/ChatContainerUser.module.css";
import ChatMessageUser from "../components/ChatMessageUser";

function ChatContainerUser({ messages, onSendMessage, onSendFile, message, setMessage }) {
  // Filter user messages based on sender
  const userMessages = messages.filter((msg) => msg.sender === "user");

  return (
    <div className={styles.chatContainerUser}>
      {/* Display user messages */}
      {userMessages.map((message, index) => (
        <ChatMessageUser key={index} message={message} />
      ))}

      {/* Chat input */}
      <div className={styles.chatInputContainer}>
        <ChatInput
          message={message}
          setMessage={setMessage}
          handleSendMessage={onSendMessage}
          handleSendFile={onSendFile}
        />
      </div>
    </div>
  );
}

export default ChatContainerUser;