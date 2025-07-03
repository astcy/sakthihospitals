import React from "react";
import fallbackImage from "../assets/only-fallback.png"; // replace with your own fallback image

const Only = ({
  src,
  alt = "Image",
  style = {},
  className = "",
  radius = 24,
  ...rest
}) => {
  return (
    <div
      className={`only-section-wrapper ${className}`}
      style={{
        width: "150%",
        maxWidth: "150%",
        borderRadius: radius,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(41,64,94,0.09)",
        marginLeft: "-300px",
        marginRight: "0",
        marginTop: "180px",
        marginBottom: "-400px",
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
            .only-section-wrapper {
              margin-left: auto !important;
              margin-right: auto !important;
              margin-top: 40px !important;
              margin-bottom: -120px !important;
              max-width: 100vw !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              display: flex !important;
              justify-content: center !important;
            }
            .only-section-wrapper img {
              width: 100% !important;
              max-width: 100vw !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Only;
