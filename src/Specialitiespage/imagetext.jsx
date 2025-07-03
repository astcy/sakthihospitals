import React from "react";
import fallbackImage from "../assets/photoo.png"; // fallback if none passed

const ImageOnlySection = ({
  src,
  alt = "Image",
  radius = 24,
  style = {},
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`image-only-wrapper ${className}`}
      style={{
        width: "125%",
        maxWidth: "130%",
        borderRadius: radius,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(41,64,94,0.09)",
        marginLeft: "-140px",
        marginRight: "0",
        marginTop: "180px",
        marginBottom: "-300px",
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
            .image-only-wrapper {
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
            .image-only-wrapper img {
              width: 100% !important;
              max-width: 100vw !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageOnlySection;
