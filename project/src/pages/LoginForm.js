"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginForm.module.css";
import InputField from "../components/InputField";
import ReCaptcha from "../components/ReCaptcha";
import Divider from "../components/Divider";
import SocialLoginButton from "../components/SocialLoginButton";

function LoginForm() {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Handle login logic here
    console.log("Continue button clicked");
    navigate("/content"); // Navigate to the Content screen
  };

  const handleSignUp = () => {
    // Handle sign up navigation
    console.log("Sign up link clicked");
    navigate("/content"); // Navigate to the Content screen
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sansation:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1bcff53b9b123de8f4ed411bde53c16be1a8a5d"
          alt="Logo"
          className={styles.logo}
        />
        <h1 className={styles.welcome}>Welcome back</h1>
        <form className={styles.formContainer}>
          <InputField label="Email address" type="email" />

          <div className={styles.recaptchaContainer}>
            <ReCaptcha />
          </div>

          <button type="button" className={styles.continueBtn} onClick={handleContinue}>
            Continue
          </button>

          <p className={styles.signupText}>
            Don't have an account?
            <button type="button" className={styles.signupLink} onClick={handleSignUp}>
              Sign up
            </button>
          </p>

          <Divider text="OR" />

          <SocialLoginButton provider="google" />
          <SocialLoginButton provider="microsoft" />
        </form>
      </main>
    </>
  );
}

export default LoginForm;