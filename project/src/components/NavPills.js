"use client";
import * as React from "react";
import { useState } from "react";
import styles from "../styles/NavPills.module.css";

function NavPills() {
  const [activePill, setActivePill] = useState(0);

  const pillOptions = [
    "Table identification",
    "Data & Issues display",
    "Data transformation",
    "Data download",
  ];

  const handlePillClick = (index) => {
    setActivePill(index);
  };

  return (
    <nav className={styles.navPills}>
      {pillOptions.map((pill, index) => (
        <button
          key={index}
          className={index === activePill ? styles.pillactive : styles.pill}
          onClick={() => handlePillClick(index)}
        >
          {pill}
        </button>
      ))}
    </nav>
  );
}

export default NavPills;
