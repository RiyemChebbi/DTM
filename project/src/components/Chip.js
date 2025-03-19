import React from "react";

const Chip = ({ label, onClick }) => {
  const handleClick = () => {
    console.log("Button clicked:", label); // Debugging: Log the clicked button
    onClick(label); // Call the onClick handler
  };

  return (
    <button
      onClick={handleClick} // Use the handleClick function
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0",
        cursor: "pointer",
        margin: "5px",
        zIndex:10,
        position:"relative",
      }}
    >
      {label}
    </button>
  );
};

export default Chip;