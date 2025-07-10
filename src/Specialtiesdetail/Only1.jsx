import React from "react";
import fallbackImage from "../assets/only1-fallback.png"; // Replace with your own fallback image

const only1 = ({
  src,
  alt = "Image",
  style = {},
  className = "",
  radius = 24,
  ...rest
}) => {
  return (
    <div
      className={`only1-section-wrapper ${className}`}
      style={{
        width: "50%",
        maxWidth: "50%",
        borderRadius: radius,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(41,64,94,0.09)",
        marginLeft: "280px",
        marginRight: "0",
        marginTop: "100px",
        marginBottom: "-320px",
        zIndex: 1,
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      <img
        src={src || fallbackImage}
        alt={alt}
        style={{
          display: "block",
          width: "70%",
          height: "auto",
          objectFit: "cover",
          margin: "0 auto",
        }}
      />

      <style>
        {`
          @media (max-width: 700px) {
            .only1-section-wrapper {
              margin-left: auto !important;
              margin-right: auto !important;
              margin-top: 40px !important;
              margin-bottom: -60px !important;
              max-width: 100vw !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              display: flex !important;
              justify-content: center !important;
            }
            .only1-section-wrapper img {
              width: 100% !important;
              max-width: 100vw !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default only1;
