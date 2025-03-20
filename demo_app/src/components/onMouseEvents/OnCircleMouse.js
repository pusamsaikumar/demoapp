import React, { useState } from "react";

const OnCircleMouse = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouse = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouse}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "pointer",
      }}
    >
      <div
        className=""
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          top: position.y - 25,
          left: position.x - 25,
          borderRadius: "50%",
          backgroundColor: "red",
          transition: "transform 0.1s linear",
        }}
      ></div>
    </div>
  );
};

export default OnCircleMouse;
