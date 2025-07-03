import React from "react";
import { ArrowRight } from "lucide-react";
import gynIcon from "../assets/gyn.png";
import urologyIcon from "../assets/urology.png";
import surgeryIcon from "../assets/surgery1.png";
import cardioIcon from "../assets/cardio1.png";
import orthoIcon from "../assets/pediatrics.png";
import diabetesIcon from "../assets/gastro.png";
import pediatricsIcon from "../assets/ent.png";
import gastroIcon from "../assets/cardio.png";
import entIcon from "../assets/surgery.png";
import { useNavigate } from "react-router-dom";

const items = [
  {
    title: "Obstetrics & Gynecology",
    description: "Holistic women’s healthcare offering expert support through fertility, pregnancy, childbirth, and beyond.",
    icon: gynIcon,
    slug: "gyn",
  },
  {
    title: "Urology",
    description: "Comprehensive diagnosis and advanced treatment for kidney, bladder, and male reproductive health concerns.",
    icon: urologyIcon,
    slug: "urology",
  },
  {
    title: "Orthopedics",
    description: "Restoring strength and mobility with specialized care for bones, joints, muscles, and injuries.",
    icon: orthoIcon,
    slug: "ortho",
  },
  {
    title: "Diabetology",
    description: "Integrated diabetes management focused on prevention, control, and long-term well-being.",
    icon: diabetesIcon,
    slug: "diabetes",
  },
  {
    title: "Pediatrics",
    description: "Compassionate and expert pediatric care to support your child’s health, development, and happiness.",
    icon: pediatricsIcon,
    slug: "pediatrics",
  },
  {
    title: "Gastroenterology",
    description: "Expert care for digestive disorders, liver conditions, and gut health using modern diagnostics and treatments.",
    icon: gastroIcon,
    slug: "gastro",
  },
  {
    title: "ENT",
    description: "Specialized care for ear, nose, and throat conditions, helping you breathe, hear, and live better.",
    icon: entIcon,
    slug: "ent",
  },
  {
    title: "Cardiology",
    description: "Advanced heart care backed by expert diagnosis, prevention strategies, and cardiac treatment.",
    icon: cardioIcon,
    slug: "cardio",
  },
  {
    title: "General Surgery",
    description: "Safe and precise surgical interventions performed with expertise, compassion, and care.",
    icon: surgeryIcon,
    slug: "surgery",
  },
];

const cardStyle = {
  background: "#fff",
  borderRadius: 10,
  boxShadow: "none",
  padding: "24px",
  flex: "1 1 30%",
  minWidth: 280,
  maxWidth: 360,
  boxSizing: "border-box",
  position: "relative",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  justifyContent: "flex-start",
  overflow: "hidden",
  cursor: "pointer",
};

const gridWrapper = (isMobile) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "14px",
  padding: isMobile ? "20px 6px" : "30px 16px",
  fontFamily: "Poppins, sans-serif",
  background: "none",
  marginTop: isMobile ? "-40px" : "-90px",
  position: "relative",
  zIndex: 10,
  borderRadius: "24px",
  maxWidth: 1200,
  marginLeft: "auto",
  marginRight: "auto",
});

const iconTextRow = {
  display: "flex",
  alignItems: "flex-start",
  gap: "0", // Reduced gap
};

const iconStyle = {
  width: 32,
  height: 32,
  flexShrink: 0,
  marginTop: 20,
    marginRight: 0, // Ensure no right margin

};

const textBlock = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
    marginLeft: 0, // Ensure no left margin

};

const titleStyle = (isHovered) => ({
  fontSize: 16,
  fontWeight: 600,
  color: isHovered ? "#fff" : "#1e3a8a",
  margin: 20,
  marginBottom: 20,
  fontFamily: "Poppins, sans-serif",
  transition: "color 0.3s",
      marginLeft: 10, // Ensure no left margin

});

const descStyle = {
  fontSize: 13,
  fontWeight: 400,
  color: "#475569",
  lineHeight: 1.5,
  margin: 0,
  marginBottom: 50,
  fontFamily: "Poppins, sans-serif",
        marginLeft: 10, // Ensure no left margin

};

const arrowBox = (isHovered) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  background: isHovered ? "#307bc4" : "#97bde1",
  padding: "6px",
  width: "50px",
  height: "35px",
  transition: "background 0.3s",
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Items() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [hovered, setHovered] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={gridWrapper(isMobile)}>
      {items.map((item, idx) => {
        const isHovered = hovered === idx;
        return (
          <div
            key={idx}
            style={{
              ...cardStyle,
              background: isHovered
                ? "linear-gradient(90deg,rgb(110, 159, 208) 0%, #86bbf1 100%)"
                : "#fff",
              boxShadow: isHovered
                ? "0 6px 20px rgba(30,41,59,0.12)"
                : "0 2px 12px rgba(30,41,59,0.06)",
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(`/specialitiesdetails/${item.slug}`)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(`/specialities/${item.slug}`);
              }
            }}
            aria-label={`Go to ${item.title} details`}
          >
            <div style={iconTextRow}>
              <img src={item.icon} alt={item.title} style={iconStyle} />
              <div style={textBlock}>
                <h3 style={titleStyle(isHovered)}>{item.title}</h3>
                <p style={descStyle}>{item.description}</p>
              </div>
            </div>
            <div style={arrowBox(isHovered)}>
              <ArrowRight size={22} color="#ffffff" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
