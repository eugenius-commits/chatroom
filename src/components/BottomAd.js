import React from "react";

const BottomAd = ({ imageUrl }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <img
        src={imageUrl}
        alt="Advertisement"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </div>
  );
};

export default BottomAd;
