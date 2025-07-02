import React, { useState, useEffect } from "react";
import doctorImage from "../assets/doctor1.png"; // adjust path as needed

// Add these fonts in your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@700;900&family=Poppins:wght@400;500&display=swap" rel="stylesheet">

const styles = {
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "40px 0",
    boxSizing: "border-box",
    marginLeft: "60px", // This will be removed on small screens
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: "48px",
    alignItems: "flex-start",
    background: "transparent",
    maxWidth: "1100px",
    width: "100%",
    padding: "0 0",
    boxSizing: "border-box",
  },
  imageBox: {
    borderRadius: "24px",
    background: "linear-gradient(66deg,rgb(213, 225, 233) 0%, #86bbf1 100%)",
    width: "340px",
    height: "450px",
    boxShadow: "0 4px 24px rgba(44, 78, 109, 0.09)",
    flexShrink: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    overflow: "visible",
  },
  image: {
    width: "100%",
    height: "510px",
    objectFit: "cover",
    objectPosition: "top center",
    display: "block",
    marginTop: "-60px",
    borderRadius: "24px",
    transition: "all 0.2s",
  },
  textSection: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: "2.6rem",
    color: "#2c4e6d",
    marginBottom: "28px",
    lineHeight: 1.1,
  },
  label: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#2c4e6d",
    marginBottom: "8px",
  },
  vision: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#6b859a",
    marginBottom: "45px",
    lineHeight: 1.3,
    maxWidth: "585px",
  },
  mission: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#6b859a",
    lineHeight: 1.3,
    maxWidth: "580px",
  },
  missionList: {
    paddingLeft: "20px",
    margin: 0,
  },
};

function useResponsive() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

function Vision() {
  const width = useResponsive();

  // Responsive overrides for mobile only
  let outerStyle = { ...styles.outer };
  let cardStyle = { ...styles.card };
  let imageBoxStyle = { ...styles.imageBox };
  let imageStyle = { ...styles.image };
  let titleStyle = { ...styles.title };
  let visionStyle = { ...styles.vision };
  let missionStyle = { ...styles.mission };
  let textSectionStyle = { ...styles.textSection };
  let missionListStyle = { ...styles.missionList };

  if (width < 768) {
    // Remove left margin and add horizontal margin for mobile
    outerStyle.marginLeft = 0;
    outerStyle.marginRight = 0;
    outerStyle.padding = "32px 8px";
    outerStyle.justifyContent = "center";
    cardStyle.flexDirection = "column";
    cardStyle.alignItems = "center";
    cardStyle.gap = "24px";
    cardStyle.padding = "0 0";
    imageBoxStyle.width = "100vw";
    imageBoxStyle.maxWidth = "420px";
    imageBoxStyle.height = "auto";
    imageBoxStyle.margin = "0 auto";
    imageBoxStyle.display = "flex";
    imageBoxStyle.justifyContent = "center";
    imageBoxStyle.alignItems = "center";
    imageBoxStyle.overflow = "visible";
    imageStyle.width = "100%";
    imageStyle.height = "auto";
    imageStyle.maxHeight = "420px";
    imageStyle.marginTop = "0";
    imageStyle.borderRadius = "20px";
    imageStyle.objectFit = "contain";
    titleStyle.fontSize = "1.3rem";
    titleStyle.textAlign = "left";      // left align title
    visionStyle.fontSize = "0.98rem";
    visionStyle.maxWidth = "100vw";
    visionStyle.textAlign = "left";     // left align vision
    missionStyle.fontSize = "0.98rem";
    missionStyle.maxWidth = "100vw";
    missionStyle.textAlign = "left";    // left align mission
    textSectionStyle.alignItems = "flex-start";  // left align section
    missionListStyle.textAlign = "left";         // left align list
    missionListStyle.paddingLeft = 0;            // REMOVE left margin for small screen
    missionListStyle.listStylePosition = "inside";
  }

  return (
    <div style={outerStyle}>
      <div style={cardStyle}>
        <div style={imageBoxStyle}>
          <img src={doctorImage} alt="Doctor" style={imageStyle} />
        </div>
        <section style={textSectionStyle}>
          <h1 style={titleStyle}>Your Trusted Care Provider</h1>
          <div>
            <div style={styles.label}>Vision</div>
            <div style={visionStyle}>
              “To be the most trusted and accessible neighborhood healthcare provider, delivering compassionate, affordable, and quality care for every family we serve."
            </div>
          </div>
          <div>
            <div style={styles.label}>Mission</div>
            <ol style={{ ...missionStyle, ...missionListStyle }}>
              <li>To provide patient-centered medical care with excellence, empathy, and integrity.</li>
              <li>To empower communities through preventive health education and awareness.</li>
              <li>To uphold our legacy as a reliable health partner for families across generations.</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Vision;
