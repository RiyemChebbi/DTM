import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import WelcomeScreen from "./pages/Welcome";
import LoginForm from "./pages/LoginForm";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]); // To store the current messages
  const [pastConversations, setPastConversations] = useState([]); // To store past conversations

  // Handle sending a new message
  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { type: "text", content: message }]);
  };

  // Handle starting a new chat
  const handleNewChat = () => {
    if (messages.length > 0) {
      const firstMessage = messages[0].content;

      // Store the current conversation as a past conversation
      setPastConversations((prevConversations) => [
        ...prevConversations,
        {
          title: firstMessage, // Use the first message as the title
          messages: messages, // Store the entire message history
        },
      ]);
    }

    // Clear the current messages to start a new chat
    setMessages([]);
  };

  // Handle clicking a "Second Action" button (display conversation history)
  const handleSecondActionClick = (conversation) => {
    setMessages(conversation.messages); // Set the conversation history when button is clicked
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Welcome Screen */}
          <Route path="/" element={<WelcomeScreen />} />

          {/* Route for the Login Form */}
          <Route path="/login" element={<LoginForm />} />

          {/* Route for the Content (Chat) Screen */}
          <Route
            path="/content"
            element={
              <Content
                handleSendMessage={handleSendMessage}
                handleNewChat={handleNewChat}
                pastConversations={pastConversations}
                handleSecondActionClick={handleSecondActionClick}
                messages={messages}
              />
            }
          />

          {/* Redirect to the Welcome Screen for unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;