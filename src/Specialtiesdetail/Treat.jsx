import React, { useState } from "react";

import maternityIcon from "../assets/maternity.png";
import riskIcon from "../assets/risk.png";
import surgeryIcon from "../assets/surgery11.png";
import gynIcon from "../assets/gyn1.png";

const treatments = [
  {
    title: "Maternity Care",
    icon: maternityIcon,
    desc: "Comprehensive care throughout pregnancy, childbirth, and postnatal recovery to ensure the health of both mother and baby.",
  },
  {
    title: "High Risk Pregnancy",
    icon: riskIcon,
    desc: "Advanced monitoring and expert intervention for pregnancies with complications, ensuring safety and support at every step.",
  },
  {
    title: "Minimal Access Surgery",
    icon: surgeryIcon,
    subtitle: "(Laparoscopy & Hysteroscopy)",
    desc: "Precision-driven surgical solutions with faster recovery, less pain, and minimal scarring for gynecological concerns.",
  },
  {
    title: "Gynecology Services",
    icon: gynIcon,
    desc: "Diagnosis and treatment for menstrual disorders, PCOS, menopause, infections, and other common gynecological issues.",
  },
];

const cardBase = {
  flex: 1,
  minWidth: 220,
  margin: 0,
  background: "#f188d6",
  borderRadius: 28,
  padding: "38px 24px 32px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
  position: "relative",
  zIndex: 1,
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(249, 168, 212, 0.10)",
};

const iconStyle = {
  width: 46,
  height: 46,
  marginBottom: 18,
};

const Treat = () => {
  const [hovered, setHovered] = useState(-1);

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "0 0 70px 0",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@700;800&family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "56px 20px 0 20px",
        }}
      >
        <div style={{ marginBottom: 32, maxWidth: 400 }}>
          <p
            style={{
              color: "#f72585",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1.2,
              marginBottom: 2,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            TYPE OF
          </p>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#1e293b",
              marginTop: 2,
              fontFamily: "'Figtree', sans-serif",
            }}
          >
            Treatments
          </h2>
        </div>

        {/* Card container with pink gradient background */}
        <div
          style={{
            background: "#f188d6",
            borderRadius: 32,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "stretch",
            marginTop: 32,
            flexWrap: "wrap",
            position: "relative",
            gap: 0,
            boxShadow: `
              0 4px 8px rgba(249, 168, 212, 0.15),
              0 8px 16px rgba(249, 168, 212, 0.1),
              0 12px 24px rgba(249, 168, 212, 0.06)
            `,
          }}
        >
          {treatments.map((t, i) => {
            const isHovered = hovered === i;

            const titleStyle = {
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#b72e2b", // Always this color
              marginBottom: 7,
              transition: "color 0.3s",
            };

            const subtitleStyle = {
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#f72585",
              marginBottom: 7,
              transition: "color 0.3s",
            };

            const descStyle = {
              color: isHovered ? "#b72e2b" : "#fff",
              fontSize: 15,
              fontWeight: 400,
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              transition: "color 0.3s",
            };

            const hoverStyle = isHovered
              ? {
                  background: "#fff",
                  boxShadow: `
                    0 4px 8px rgba(249, 104, 180, 0.08),
                    0 12px 24px rgba(249, 104, 180, 0.12),
                    0 24px 48px rgba(249, 104, 180, 0.2),
                    0 32px 64px rgba(249, 104, 180, 0.15)
                  `,
                  transform: "translateY(-24px)",
                  zIndex: 2,
                }
              : {};

            return (
              <div
                key={i}
                style={{
                  ...cardBase,
                  ...hoverStyle,
                  borderRadius:
                    i === 0
                      ? "32px 0 0 32px"
                      : i === treatments.length - 1
                      ? "0 32px 32px 0"
                      : "0",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
              >
                <img src={t.icon} alt={t.title} style={iconStyle} />
                <div style={titleStyle}>{t.title}</div>
                {t.subtitle && <div style={subtitleStyle}>{t.subtitle}</div>}
                <div style={descStyle}>{t.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Responsive styling */}
      <style>
        {`
        @media (max-width: 900px) {
          div[style*="display: flex"][style*="align-items: stretch"][style*="background:linear-gradient(90deg, #f188d6 0%, #fbe3f5 100%)"] {
            flex-direction: column !important;
          }
          div[style*="display: flex"][style*="align-items: stretch"][style*="background:linear-gradient(90deg, #f188d6 0%, #fbe3f5 100%)"] > div {
            border-radius: 32px !important;
            margin-bottom: 18px !important;
          }
        }
      `}
      </style>
    </div>
  );
};

export default Treat;
