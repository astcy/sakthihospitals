import React from "react";
import backImage from "../assets/back-stats.jpg"; // Update the path to your image

const Back = () => (
  <div
    className="back-img-wrapper"
    style={{
      maxWidth: 1100,
      margin: "40px auto",
      borderRadius: 32,
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(41,64,94,0.08)",
      width: "100%",
          marginLeft:'100px',

      // No marginLeft here—keep large screen layout intact
    }}
  >
    <img
      src={backImage}
      alt="Stats Background"
      style={{
        width: "100%",
        display: "block",
        objectFit: "cover",
        height: "auto",
      }}
    />
    {/* Center only for small screens */}
    <style>
      {`
        @media (max-width: 700px) {
          .back-img-wrapper {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 95vw !important;
            border-radius: 18px !important;
          }
        }
      `}
    </style>
  </div>
);

export default Back;
