import React from "react";

const OnMouseMoveStateValuePosition = ({ position }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "darkcyan",
        pointerEvents: "none",
        left: position.x - 25,
        top: position.y - 25,
        transition: "transform 0.1s linear",
      }}
    ></div>
  );
};

export default OnMouseMoveStateValuePosition;
