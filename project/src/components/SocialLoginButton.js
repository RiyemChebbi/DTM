import React from "react";
import styles from "../styles/SocialLoginButton.module.css";
import GoogleIcon from "../components/GoogleIcon";
import MicrosoftIcon from "../components/MicrosoftIcon";

function SocialLoginButton({ provider }) {
  const handleClick = () => {
    console.log(`Continue with ${provider}`);
  };

  return (
    <button className={styles.socialButton} onClick={handleClick}>
      {provider === "google" ? <GoogleIcon /> : <MicrosoftIcon />}
    </button>
  );
}

export default SocialLoginButton;
