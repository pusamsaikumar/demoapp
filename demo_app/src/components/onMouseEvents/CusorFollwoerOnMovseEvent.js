import React, { forwardRef, useRef } from "react";

const CusorFollwoerOnMovseEvent = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          backgroundColor: "darkblue",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "transform 0.1s linear",
        }}
      ></div>
    </>
  );
});

export default CusorFollwoerOnMovseEvent;
