"use client";
import React from "react";
import styles from "../styles/Start.module.css";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ChatInput from "../components/ChatInput";
import FirstSidebar from"../components/FirstSidebar";
import NavPills from "../components/NavPills";


function StartScreens() {
  return (
    <section className={styles.startScreens}>
      <div className={styles.container}>
        <div className={styles.sidebarColumn}>
          <Sidebar/>
        </div>
        <div className={styles.mainColumn}>
           
          <MainContent />
          <ChatInput/>
        </div>
      </div>
    </section>
  );
}

export default StartScreens;
