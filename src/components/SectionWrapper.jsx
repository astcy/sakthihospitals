// src/components/SectionWrapper.jsx
import React from "react";

const SectionWrapper = ({ children, style = {} }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "4rem 1rem",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
