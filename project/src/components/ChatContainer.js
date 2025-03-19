import React, { useState, useEffect } from "react";
import ChatMessageUser from "../components/ChatMessageUser";
import ChatMessageBot from "../components/ChatMessageBot";
import ChatInput from "./ChatInput";
import SimpleButtons from "./SimpleButtons";
import styles from "../styles/ChatContainer.module.css";

function ChatContainer({ isNewChat }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const welcomeMessage = {
    type: "text",
    content:
      "Hello! I'm your Data Transformation Assistant. Need to clean, format, or extract insights from your data? Upload your dataset, and let's get started!",
    sender: "bot",
  };

  useEffect(() => {
    if (isNewChat) {
      setMessages([]);
      setShowWelcomeMessage(true);
    }
  }, [isNewChat]);

  const sendMessageToBackend = async (msg) => {
    try {
      const response = await fetch("http://localhost:5000/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error sending message to backend:", error);
      return "Sorry, something went wrong. Please try again later.";
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { type: "text", content: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    const botReply = await sendMessageToBackend(message);
    setMessages((prev) => [...prev, { type: "text", content: botReply, sender: "bot" }]);
  };

  const handleSendFile = (data) => {
    setMessages((prev) => [...prev, { type: "csv", content: data, sender: "user" }]);
  };

  const handleButtonClick = (buttonLabel) => {
    setMessage(buttonLabel);
  };

  const lastMessageIsCSV = messages.length > 0 && messages[messages.length - 1].type === "csv";

  return (
    <section className={styles.chatContainer}>
      {showWelcomeMessage && (
        <div className={styles.welcomeMessage}>
          <span role="img" aria-label="wave">👋</span> {welcomeMessage.content}
        </div>
      )}
      
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) =>
          msg.sender === "user" ? (
            <ChatMessageUser key={index} message={msg} />
          ) : (
            <ChatMessageBot key={index} message={msg} />
          )
        )}
      </div>

      <div className={styles.chatInputContainer}>
        <ChatInput
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          handleSendFile={handleSendFile}
        />
      </div>
      
      {lastMessageIsCSV && <SimpleButtons onButtonClick={handleButtonClick} />}
    </section>
  );
}

export default ChatContainer;
