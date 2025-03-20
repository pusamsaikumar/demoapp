import React, { useRef, useEffect } from "react";

const CursorFollower = () => {
  const circleRef = useRef();

  useEffect(() => {
    const movesHandle = (event) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${event.clientX - 25}px `;
        circleRef.current.style.top = `${event.clientY - 25}px`;
      }
    };
    document.addEventListener("mousemove", movesHandle);
    return () => {
      document.removeEventListener("mousemove", movesHandle);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "red",
        pointerEvents: "none",
        transition: "transform 0.1s linear",
      }}
    ></div>
  );
};

export default CursorFollower;
