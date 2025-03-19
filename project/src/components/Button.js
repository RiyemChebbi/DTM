import React from "react";
import styles from "../styles/Button.module.css";

function Button({
  children,
  variant = "login",
  onClick,
  isLoading = false,
  disabled = false,
  ...props
}) {
  const buttonClass =
    variant === "login" ? styles.loginButton : styles.signupButton;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-busy={isLoading}
      role="button"
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
