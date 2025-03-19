"use client";
import React from "react";
import styles from "../styles/Start.module.css";
import Sidebar from "../components/Sidebar";
import SecondContent from "./SecondContent";
// Import NavPills component
import NavPills from "../components/NavPills"; 

function Content({ handleSendMessage, handleNewChat, pastConversations, handleSecondActionClick, messages }) {
  return (
    <section className={styles.startScreens}>
      <div className={styles.container}>
        <div className={styles.sidebarColumn}>
          {/* Pass necessary props to Sidebar */}
          <Sidebar
            onNewChatClick={handleNewChat}
            pastConversations={pastConversations}
            onSecondActionClick={handleSecondActionClick}
          />
        </div>
        <div className={styles.mainColumn}>
          {/* Place NavPills above SecondContent */}
          <NavPills />
          {/* Pass the current messages to SecondContent */}
          <SecondContent currentMessages={messages} />
        </div>
      </div>
    </section>
  );
}

export default Content;
