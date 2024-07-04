import React, { useState } from "react";

function HoverContainer() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {" "}
      <h1
        style={{ color: isHovered ? "yellow" : "black" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Random Color Example
      </h1>
    </>
  );
}

export default HoverContainer;
