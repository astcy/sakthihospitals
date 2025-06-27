// src/components/SectionWrapper.jsx
import React from "react";

const SectionWrapper = ({ children, style = {} }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "4rem 2rem", // Slightly more horizontal padding for breathing room
        boxSizing: "border-box",
        overflowX: "hidden", // prevent overflow caused by translateX
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
