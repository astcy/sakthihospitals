import React from "react";
import { FaSmile } from "react-icons/fa";

const Common = ({
  title = "Contact Us",
  subtext = "Kindly reach us to get the fastest response and treatment.",
}) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Layout styles
  const outerWrapper = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    background: "#b9d9f4",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: isMobile ? "80px 10px 30px" : "120px 100px 40px 80px",
    boxSizing: "border-box",
    minHeight: isMobile ? 410 : 320,
  };

  const waveGradient = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "75%",
    background: `linear-gradient(270deg, 
      rgb(120, 190, 244) 0%, 
      rgb(145, 198, 235) 25%, 
      rgb(150, 204, 251) 35%, 
      rgb(157, 204, 255) 45%, 
      rgb(161, 193, 234) 60%, 
      #b9d9f4 75%, 
      rgb(227, 229, 232) 102%, 
      rgb(184, 200, 215) 100%)`,
    zIndex: 1,
    mask: "linear-gradient(to bottom, transparent 0%, black 20%)",
    WebkitMask: "linear-gradient(to bottom, transparent 0%, black 20%)",
  };

  // Left content (breadcrumbs, heading, subtext)
  const leftContent = {
    position: "absolute",
    top: isMobile ? "40px" : "120px",
    left: isMobile ? "10px" : "100px",
    zIndex: 3,
    textAlign: "left",
    minWidth: 210,
    maxWidth: 480,
  };

  const breadcrumb = {
    color: "#94aebb",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    marginBottom: 14,
    letterSpacing: 0.1,
  };

  const heading = {
    color: "#274760",
    fontWeight: 700,
    fontFamily: "'Figtree', sans-serif",
    fontSize: isMobile ? "1.7rem" : "2.3rem",
    lineHeight: 1.15,
    marginBottom: 7,
    marginTop: 0,
  };

  const subTextStyle = {
    color: "#8cb0ca",
    fontSize: isMobile ? "13px" : "13px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    marginTop: 8,
    marginBottom: 0,
    opacity: 0.9,
    maxWidth: 400,
  };

  // Right content (main card area)
  const rightContent = {
    position: "relative",
    zIndex: 3,
    flex: "0 0 480px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: isMobile ? "100%" : "540px",
    minHeight: isMobile ? 260 : 320,
    height: isMobile ? "auto" : "320px",
  };

  // Main card background
  const backgroundBox = {
    marginTop:"50px",
    background: "#e2e8f0",
    borderRadius: "10px",
    width: isMobile ? "92%" : "420px",
    height: isMobile ? "200px" : "400px",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 2px 16px rgba(30,41,59,0.04)",
    marginLeft: isMobile ? "0" : "auto",
  };

  // Doctor card (top logo/card)
  const doctorCard = {
    background: "#fff",
    borderRadius: "12px",
    padding: "10px 10px 10px 10px",
    boxShadow: "0 4px 16px rgba(30,41,59,0.09)",
    position: "absolute",
    top: "35%",
    left: isMobile ? "12px" : "-100px",
    transform: "translateY(-40%)",
    width: isMobile ? "76%" : "230px",
    minWidth: 170,
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const avatar = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#dbeafe",
    marginBottom: "10px",
    display: "inline-block",
  };

  const doctorName = {
    fontWeight: 600,
    fontSize: "15px",
    fontFamily: "'Figtree', sans-serif",
    color: "#92a2af",
    marginBottom: 2,
  };

  const doctorSpec = {
    fontSize: "12px",
    color: "#90a2b0",
    marginBottom: 7,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
  };

  const doctorTime = {
    fontSize: "11px",
    color: "#475569",
    background: "#f1f5f9",
    padding: "4px 10px",
    borderRadius: "8px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    marginTop: 2,
  };

  // Stat card (bottom logo/card)
  const statCard = {
    background: "#fff",
    borderRadius: "12px",
    padding: "10px 18px",
    display: "flex",
    alignItems: "center",
    gap: "9px",
    boxShadow: "0 4px 16px rgba(30,41,59,0.09)",
    position: "absolute",
    bottom: "20%",
    right: isMobile ? "10px" : "-1px",
    transform: "translateY(60%)",
    zIndex: 2,
    minWidth: 110,
  };

  const statIconWrap = {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#dbeafe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const statTextNum = {
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: "'Poppins', sans-serif",
    color: "#0f172a",
    marginBottom: 0,
    lineHeight: 1.1,
  };

  const statTextLabel = {
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
    color: "#64748b",
    marginTop: 0,
    lineHeight: 1.1,
  };

  return (
    <div style={outerWrapper}>
      <div style={waveGradient}></div>
      {/* Left */}
      <div style={leftContent}>
        <div style={breadcrumb}>Home / Blog / Read</div>
        <h1 style={heading}>{title}</h1>
        <p style={subTextStyle}>{subtext}</p>
      </div>
      {/* Right */}
      <div style={rightContent}>
        <div style={backgroundBox}></div>
        {/* Doctor Card (top, 40% from top) */}
        <div style={doctorCard}>
         <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
  <div style={avatar}></div>
  <div style={{ marginLeft: 10 }}>
    <div style={doctorName}>Dr. David James, MD</div>
    <div style={doctorSpec}>Pediatrician</div>
  </div>
</div>

          <div style={doctorTime}>Available Mon – Sat, 7 AM – 9 PM</div>
        </div>
        {/* Stat Card (bottom, 60% from bottom) */}
        <div style={statCard}>
          <div style={statIconWrap}>
            <FaSmile style={{ color: "#3b82f6", fontSize: "18px" }} />
          </div>
          <div>
            <div style={statTextNum}>1260+</div>
            <div style={statTextLabel}>Happy Patient</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
