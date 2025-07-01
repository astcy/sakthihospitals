import React from "react";
import myImage from "../assets/mye.png"; // fallback image (optional)

/**
 * Usage:
 * <ImgSection src={yourImage} alt="Description" />
 * You can override radius and styles if needed.
 */

const ImgSection = ({
  src,
  alt = "Image",
  style = {},
  className = "",
  radius = 24, // default border radius
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: "100%",
        borderRadius: radius,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(41,64,94,0.09)",
        ...style,
      }}
      {...rest}
    >
      <img
        src={src || myImage} // fallback to default image if src not passed
        alt={alt}
        style={{
          display: "block",
          width: "70%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ImgSection;
