import React from "react";
import myImage from "../assets/mye.png"; // fallback image

const ImgSection = ({
  src,
  alt = "Image",
  style = {},
  className = "",
  radius = 24,
  ...rest
}) => {
  return (
    <div
      className={`img-section-wrapper ${className}`}
      style={{
        width: "100%",
        maxWidth: "100%",
        borderRadius: radius,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(41,64,94,0.09)",
        marginLeft: "10px",
        marginRight: "0",
        marginTop: "180px",
        marginBottom: "-140px",
        zIndex: 1,
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      <img
        src={src || myImage}
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
            .img-section-wrapper {
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
            .img-section-wrapper img {
              width: 100% !important;
              max-width: 100vw !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImgSection;
