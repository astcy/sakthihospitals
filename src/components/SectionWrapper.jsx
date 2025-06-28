// src/components/SectionWrapper.jsx
import React from "react";

const SectionWrapper = ({
  children,
  style = {},
  maxWidth = "1200px", // customizable max width
  padding = "4rem 1.5rem", // adjustable default padding
  center = false, // optional horizontal center alignment
}) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: maxWidth,
        margin: center ? "0 auto" : "initial", // center content if true
        padding: padding,
        boxSizing: "border-box",
        overflowX: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
