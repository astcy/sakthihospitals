import React, { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Add to your public/index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@700&family=Poppins:wght@400;500&display=swap" rel="stylesheet">

const cardData = [
  {
    id: 'urology',
    title: "Urology",
    description:
      "Delivering advanced diagnosis and treatment for kidney, bladder, and urinary conditions with precision and care.",
  },
  {
    id: 'mother-care',
    title: "Mother Care",
    description:
      "From prenatal guidance to postnatal support, we walk every step with mothers for a safe and joyful journey.",
  },
  {
    id: 'preventive-care',
    title: "Preventive care",
    description:
      "Empowering you with early detection and health checkups to prevent illness before it starts.",
  },
  {
    id: 'child-care',
    title: "Child Care",
    description:
      "Comprehensive pediatric services focused on your child's health, growth, and happiness at every stage.",
  },
  {
    id: 'senior-home-care',
    title: "Senior Home Care",
    description:
      "Personalized medical care for seniors in the comfort of their homes, ensuring dignity and well-being.",
  },
];

const Aboutexcel = () => {
  const navigate = useNavigate();
  const LEFT_COL_WIDTH = 360;
  const GAP = 18;

  // Handle card click navigation
  const handleCardClick = (serviceId) => {
    navigate(`/service`);
  };

  return (
    <div
      className="about-excel-outer"
      style={{
        width: "100%",
        background: "linear-gradient(105deg,rgb(161, 198, 240) 0%,#b3d8f2 100%)",
        padding: "60px 0",
        fontFamily: "'Poppins', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        className="about-excel-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 48,
          paddingRight: 48,
          display: "flex",
          alignItems: "flex-start",
          gap: `${GAP}px`,
        }}
      >
        {/* Left: Text */}
        <div
          className="about-excel-left"
          style={{
            flex: `0 0 ${LEFT_COL_WIDTH}px`,
            minWidth: 260,
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#307bc4",
              fontWeight: 500,
              fontSize: "1rem",
              letterSpacing: "1.5px",
              marginBottom: 10,
              marginTop: 40,
              marginLeft: 18,
            }}
          >
            SERVICES
          </div>
          <h2
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 700,
              fontSize: "3rem",
              color: "#274760",
              lineHeight: 1.2,
              margin: 0,
              whiteSpace: "pre-line",
              marginLeft: 16,
            }}
          >
            Our Center of{"\n"}Excellence
          </h2>
        </div>

        {/* Right: Cards */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* First Row - 2 Cards */}
          <div
            className="card-grid-top"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridAutoRows: "1fr",
              gap: "15px",
              marginBottom: "14px",
              alignItems: "stretch",
            }}
          >
            {cardData.slice(0, 2).map((card, i) => (
              <Card
                key={i}
                {...card}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>

          {/* Second Row - 3 Cards (starts from left edge) */}
          <div
            className="card-grid-bottom"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "1fr",
              gap: "15px",
              alignItems: "stretch",
              marginLeft: `-${LEFT_COL_WIDTH + GAP - 16}px`,
            }}
          >
            {cardData.slice(2).map((card, i) => (
              <Card
                key={i}
                {...card}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Media Queries */}
      <style>
        {`
          @media (max-width: 1100px) {
            .card-grid-top {
              grid-template-columns: 1fr !important;
            }
            .card-grid-bottom {
              grid-template-columns: 1fr 1fr !important;
              margin-left: 0 !important;
            }
          }

          @media (max-width: 768px) {
            .about-excel-outer {
              padding-top: 0 !important;
              padding-bottom: 40px !important;
            }
            .about-excel-container {
              flex-direction: column !important;
              gap: 24px !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .about-excel-left {
              flex: 1 1 100% !important;
              min-width: 0 !important;
            }
            /* Center cards on small screens only */
            .card-grid-top,
            .card-grid-bottom {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
              grid-template-columns: none !important;
              gap: 16px !important;
              margin-left: 0 !important;
            }
            .card-grid-top > div,
            .card-grid-bottom > div {
              max-width: 340px !important;
              width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const Card = ({ id, title, description, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "28px 24px 48px 24px",
        boxShadow: isHovered
          ? "0 8px 24px rgba(41, 64, 94, 0.15)"
          : "0 4px 18px rgba(41, 64, 94, 0.08)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 200,
        cursor: "pointer",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(.4,1.3,.6,1)",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsArrowHovered(false);
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 36,
          height: 36,
          background: "#3984c9",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
        }}
      >
        <Calendar color="#fff" size={18} />
      </div>

      {/* Title - Figtree font */}
      <div
        style={{
          fontFamily: "'Figtree', sans-serif",
          fontWeight: 700,
          fontSize: "1.12rem",
          color: "#1c2e45",
          marginBottom: 8,
        }}
      >
        {title}
      </div>

      {/* Description - Poppins font, 3-line clamp */}
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "0.85rem",
          color: "#4a6c8b",
          flexGrow: 1,
          lineHeight: 1.6,
          marginBottom: 16,
          maxWidth: 320,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          whiteSpace: "normal",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </div>

      {/* Arrow button with hover effect */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          background: isArrowHovered ? "#5ba3ff" : "#80c0ff",
          borderRadius: "4px",
          width: 45,
          height: 35,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background-color 0.2s ease, transform 0.2s ease",
          transform: isArrowHovered ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={e => {
          e.stopPropagation();
          setIsArrowHovered(true);
        }}
        onMouseLeave={e => {
          e.stopPropagation();
          setIsArrowHovered(false);
        }}
      >
        <ArrowRight
          color="#fff"
          size={22}
          style={{
            transform: isArrowHovered ? "translateX(2px)" : "translateX(0)",
            transition: "transform 0.2s ease",
          }}
        />
      </div>
    </div>
  );
};

export default Aboutexcel;
