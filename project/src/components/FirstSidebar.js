"use client";
import React from "react";
import styles from "../styles/LeftSidebar.module.css";

// Button component for sidebar actions
const SidebarButton = ({ icon, text, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className={icon} aria-hidden="true" />
      <span>{text}</span>
    </button>
  );
};

function Sidebar() {
  const handleNewChat = () => {
    console.log("New chat clicked");
    // Add your new chat logic here
  };

  const handleSecondAction = () => {
    console.log("Second action clicked");
    // Add logic for the second sidebar button here
  };

  const handleClearConversations = () => {
    console.log("Clear conversations clicked");
    // Add your clear conversations logic here
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sansation:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <aside className={styles.sidebar}>
        <div className={styles.topActions}>
          <SidebarButton
            icon={styles.tiTiPlusI}
            text="New chat"
            className={styles.newChatButton}
            onClick={handleNewChat}
          />
          
          
        </div>

        <hr className={styles.divider} />

        <section className={styles.bottomActions}>
          <SidebarButton
            icon={styles.tiTiTrashI2}
            text="Clear conversations"
            className={styles.clearConversations}
            onClick={handleClearConversations}
          />

          <SidebarButton
            icon={styles.tiTiLogoutI3}
            text="Log out"
            className={styles.logout}
            onClick={handleLogout}
          />
        </section>
      </aside>
    </>
  );
}

export default Sidebar;