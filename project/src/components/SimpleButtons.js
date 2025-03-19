import React from "react";

const buttons = [
  "Fix missing values",
  "Fix dates",
  "Fix gender column",
  "Group data by column",
  "Visualize distribution",
  "Download data",
];

const SimpleButtons = ({ onButtonClick }) => {
  const handleButtonClick = (buttonLabel) => {
    console.log("Button clicked in SimpleButtons:", buttonLabel);
    if (onButtonClick) {
      onButtonClick(buttonLabel);
    } else {
      console.error("onButtonClick is undefined");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop:"-50px",
        padding: "10px",
        width: "100%",
       // transform: "translateY(-200px)", // ✅ Ensures it follows the last chat bubble
        position: "relative", // ✅ Keeps it in place without overlapping
      }}
    >
      {buttons.map((buttonLabel, index) => {
        let buttonColor = index < 3 ? "#00A491" : index === 3 ? "#C8D100" : "#FABA00";

        return (
          <button
            key={index}
            onClick={() => handleButtonClick(buttonLabel)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: buttonColor,
              cursor: "pointer",
              margin: "5px",
              color: "#fff",
            }}
          >
            {buttonLabel}
          </button>
        );
      })}
    </div>
  );
};

export default SimpleButtons;
