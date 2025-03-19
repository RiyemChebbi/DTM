"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Welcome.module.css";
import Button from "../components/Button";
import logo from "../assets/Logo.png"; // Adjust path if needed

function WelcomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    setIsLoading(true);
    try {
      // Add your login logic here
      console.log("Login clicked");
      navigate("/login"); // Navigate to the LoginForm screen
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignup() {
    setIsLoading(true);
    try {
      // Add your signup logic here
      console.log("Signup clicked");
      navigate("/content"); // Navigate to the Content screen
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={styles.container}>
      <img alt="HUTGPT Logo" src={logo} className={styles.logo} />
      <h1 className={styles.welcome}>Welcome to HUTGPT</h1>
      <p className={styles.subtitle}>Hutchinson's Data Management Tool</p>
      <div className={styles.buttonContainer}>
        <Button variant="login" onClick={handleLogin} isLoading={isLoading} disabled={isLoading}>
          Log in
        </Button>
        <Button variant="signup" onClick={handleSignup} isLoading={isLoading} disabled={isLoading}>
          Sign up
        </Button>
      </div>
    </section>
  );
}

export default WelcomeScreen;