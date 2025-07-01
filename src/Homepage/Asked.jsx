import React, { useState, useEffect } from "react";
import arrowDown from "../assets/arrow-down.png"; // Use your own image path

const faqList = [
  {
    question: "What services does Sakthi Hospital has to offer ?",
    answer: "",
  },
  {
    question: "How do I schedule an appointment with Sakthi Hospital ?",
    answer: "",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. Please check with your insurance provider to confirm that we are in-network. If you have any questions about insurance or billing, please contact our office at 123-456-7890.",
  },
  {
    question: "What should I bring to my appointment?",
    answer: "",
  },
  {
    question: "How do I request a prescription refill?",
    answer: "",
  },
];

function Asked() {
  const [openIdx, setOpenIdx] = useState(2);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const poppins = "'Poppins', sans-serif";
  const figtree = "'Figtree', sans-serif";

  const styles = {
    main: {
      minHeight: "100vh",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // No bottom space for mobile, normal for desktop
      padding: isMobile ? "22px 4px 0 4px" : "60px 0",
      fontFamily: poppins,
    },
    title: {
      color: "#7dacda",
      fontWeight: 700,
      fontSize: isMobile ? "13px" : "16px",
      letterSpacing: "1px",
      marginBottom: "8px",
      textAlign: "center",
      fontFamily: poppins,
      userSelect: "none",
      textTransform: "uppercase",
    },
    subtitle: {
      color: "#0f172a",
      fontWeight: 400,
      fontSize: isMobile ? "26px" : "48px",
      marginBottom: isMobile ? "22px" : "40px",
      textAlign: "center",
      fontFamily: figtree,
      userSelect: "none",
      lineHeight: 1.1,
    },
    faqContainer: {
      width: "100%",
      maxWidth: "900px",
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "10px" : "20px",
    },
    faqBox: {
      background: "#fff",
      borderRadius: "18px",
      boxShadow: "0 0 0 1px #e5e7eb",
      padding: isMobile ? "13px 10px" : "22px 34px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      transition: "box-shadow 0.18s, background 0.18s",
      minHeight: isMobile ? "54px" : "64px",
      position: "relative",
      fontFamily: poppins,
    },
    faqBoxActive: {
      background: "#e8f4fb",
      boxShadow: "0 8px 32px #bae6fd66, 0 0 0 1px #bae6fd",
      marginLeft: isMobile ? "4px" : "24px",
      width: isMobile ? "calc(100% - 8px)" : "calc(100% - 48px)",
    },
    questionRow: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    question: {
      color: "#1e293b",
      fontWeight: 500,
      fontSize: isMobile ? "15px" : "18px",
      margin: 0,
      flex: 1,
      fontFamily: figtree,
      userSelect: "none",
      lineHeight: 1.3,
      textAlign: "left",
    },
    icon: {
      marginLeft: "16px",
      width: isMobile ? 22 : 26,
      height: isMobile ? 22 : 26,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      userSelect: "none",
      transition: "transform 0.2s",
      transform: "rotate(0deg)",
    },
    iconOpen: {
      transform: "rotate(180deg)",
    },
    answer: {
      marginTop: isMobile ? "8px" : "13px",
      color: "#334155",
      fontSize: isMobile ? "13px" : "15px",
      fontWeight: 300,
      fontFamily: poppins,
      lineHeight: 1.6,
      userSelect: "none",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.title}>WHAT PEOPLE</div>
      <div style={styles.subtitle}>Usually Asked</div>
      <div style={styles.faqContainer}>
        {faqList.map((item, idx) => {
          const isActive = openIdx === idx;
          return (
            <div
              key={idx}
              style={{
                ...styles.faqBox,
                ...(isActive ? styles.faqBoxActive : {}),
                flexDirection: "column",
                alignItems: "stretch",
                boxSizing: "border-box",
              }}
              onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
            >
              <div style={styles.questionRow}>
                <span style={styles.question}>{item.question}</span>
                <span
                  style={{
                    ...styles.icon,
                    ...(isActive ? styles.iconOpen : {}),
                  }}
                >
                  <img
                    src={arrowDown}
                    alt={isActive ? "Collapse" : "Expand"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                    draggable={false}
                  />
                </span>
              </div>
              {isActive && item.answer && (
                <div style={styles.answer}>{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Asked;
