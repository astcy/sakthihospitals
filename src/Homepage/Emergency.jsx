import React, { useState } from "react";
import emergencyIcon from "../assets/emergency.png";
import pediatricIcon from "../assets/pediatric.png";
import gynoIcon from "../assets/gyno.png";
import urologyIcon from "../assets/urology.png";
import orthoIcon from "../assets/ortho.png";
import psychIcon from "../assets/psych.png";

const departments = [
  { title: "Emergency Department", icon: emergencyIcon },
  { title: "Pediatric Department", icon: pediatricIcon },
  { title: "Obstetrics and Gynecology Department", icon: gynoIcon },
  { title: "Urology Department", icon: urologyIcon },
  { title: "Orthopedics Department", icon: orthoIcon },
  { title: "Psychiatry Department", icon: psychIcon },
];

const Emergency = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#fff",
        padding: "30px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1080px",
          margin: "0 20px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to right, #a3cbf3 0%, #cee7f1 100%)",
            borderRadius: "20px",
            padding: "60px 20px 100px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "2.5rem",
              fontWeight: "600",
              marginBottom: "40px",
            }}
          >
            Specialities
          </h2>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              position: isMobile ? "static" : "absolute",
              left: isMobile ? "auto" : "50%",
              transform: isMobile ? "none" : "translateX(-50%)",
              bottom: isMobile ? "auto" : "-60px",
              width: "100%",
              maxWidth: "1160px",
              padding: "0 20px",
              marginTop: isMobile ? "30px" : 0, // <-- Only for small screens
            }}
          >
            {departments.map((dept, index) => {
              const isHovered = hoverIndex === index;

              return (
                <div
                  key={index}
                  className="dept-card"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    background: isHovered ? "#307bc4" : "#ffffff",
                    color: isHovered ? "#ffffff" : "#000000",
                    textAlign: "center",
                    padding: "25px 15px",
                    borderRadius: "16px",
                    boxShadow: isHovered
                      ? "0 12px 24px rgba(0, 0, 0, 0.2)"
                      : "0 4px 12px rgba(0, 0, 0, 0.08)",
                    transform: isHovered
                      ? "translateY(-6px) scale(1.04)"
                      : "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={dept.icon}
                    alt={dept.title}
                    style={{
                      height: "40px",
                      width: "40px",
                      marginBottom: "15px",
                      objectFit: "contain",
                      filter: isHovered ? "brightness(0) invert(1)" : "none",
                      transition: "filter 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "500",
                    }}
                  >
                    {dept.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Space for cards to float below gradient container */}
        {!isMobile && <div style={{ height: "120px" }}></div>}

        {/* Responsive styling using CSS class */}
        <style>
          {`
            .dept-card {
              flex: 1 1 calc(14% - 20px);
              max-width: 155px;
              min-width: 135px;
            }

            @media (max-width: 1024px) {
              .dept-card {
                flex: 1 1 calc(33.33% - 20px);
                max-width: none;
              }
            }

            @media (max-width: 768px) {
              .dept-card {
                flex: 1 1 calc(50% - 20px);
              }
            }

            @media (max-width: 480px) {
              .dept-card {
                flex: 1 1 100%;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Emergency;
