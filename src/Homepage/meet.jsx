import React, { useState } from "react";
import doctor1 from "../assets/Doctor3 .png";
import doctor2 from "../assets/Doctor3.png";
import doctor3 from "../assets/Doctor2.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const doctors = [
  {
    img: doctor1,
    name: "Dr. Sivakamu Dhandapani",
    title: "M.D., D.G.O., Chairperson of Sakthi Hospital",
    desc:
      "has been honoured with the Lifetime achievement award by Dr. M.G.R Medical University, during their silver jubilee year in 2012. She has over 40+ years of experience in Obstetrics / Gynaecology with training from London (UK).",
    social: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
    ],
  },
  {
    img: doctor3,
    name: "Dr. D. Venkat Subramaniam",
    title: "M.S, D.Lap, M.Ch – Urology",
    desc:
      "Holding degrees in M.S, D.Lap, and M.Ch in Urology, he combines technical proficiency with a deep commitment to patient welfare.",
    social: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
    ],
  },
  {
    img: doctor2,
    name: "Dr. Usha Rani Minna",
    title: "Senior Consultant – Obstetrics, Gynecology",
    desc:
      "MBBS, DGO, MRCOG | Fellowship in Minimally Invasive Surgery | Diploma in Gynecological Endoscopy | Certified in Reproductive Medicine",
    social: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
    ],
  },
];

const containerStyle = {
  background: "#fff",
  padding: "60px 20px",
  textAlign: "center",
  fontFamily: "'Segoe UI', sans-serif",
  minHeight: "100vh",
  marginBottom: "10px",
};

const subtitleStyle = {
  fontFamily: "'Figtree', sans-serif",
  fontSize: 16,
  fontWeight: 600,
  color: "#307bc4",
  textTransform: "uppercase",
  marginTop: 20,
  marginBottom: 4,
  letterSpacing: "1px",
};

const titleStyle = {
  fontFamily: "'Figtree', sans-serif",
  fontSize: 44,
  fontWeight: 700,
  color: "#1e293b",
  marginTop: 0,
  marginBottom: 50,
};

const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "36px",
};

const cardWidth = 375;

const cardBaseStyle = {
  width: cardWidth,
  minHeight: 480,
  background: "transparent",
  borderRadius: "18px",
  boxShadow: "none",
  padding: 0,
  textAlign: "center",
  transition: "all 0.18s cubic-bezier(.4,1.2,.6,1)",
  cursor: "pointer",
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  overflow: "visible",
};

const cardHoverStyle = {
  background: "#fff",
  boxShadow: "0 4px 16px 0 rgba(28,56,90,0.07)",
  borderRadius: "18px",
  padding: "0 0 24px 0",
  transform: "scale(1.01)",
  zIndex: 2,
};

const imgContainerBase = {
  width: "100%",
  height: "260px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "14px 14px 0 0",
  background: "transparent",
  transition: "background 0.35s",
};

const imgContainerHover = {
  background: "#e8f4fd",
};

const imgStyle = {
  maxWidth: "92%",
  maxHeight: "92%",
  objectFit: "contain",
  display: "block",
  borderRadius: "12px",
  background: "transparent",
  transition: "box-shadow 0.25s",
};

const nameStyle = {
  fontSize: "28px",
  fontWeight: 700,
  color: "#1e293b",
  margin: "10px 0 6px 0",
  fontFamily: "'Figtree', sans-serif",
};

const titleTextStyle = {
  fontSize: "14px",
  color: "#334155",
  margin: "0 0 12px 0",
  fontWeight: 500,
  fontFamily: "'Poppins', sans-serif",
};

const descStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "14px",
  color: "#64748b",
  lineHeight: 1.6,
  margin: "0 0 10px 0",
};

const socialStyle = {
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  marginTop: "16px",
  fontSize: "20px",
  color: "#2563eb",
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.25s",
};

const socialVisible = {
  opacity: 1,
  pointerEvents: "auto",
};

const iconLinkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  transition: "color 0.2s, background 0.2s",
  background: "#e8f4fd",
  padding: "8px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
};

const iconLinkHoverStyle = {
  color: "#fff",
  background: "#2563eb",
};

const Meet = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={containerStyle}>
      <div style={{ marginBottom: 60 }}>
        <h4 style={subtitleStyle}>MEET OUR</h4>
        <h2 style={titleStyle}>Experts Doctor</h2>
      </div>
      <div style={gridStyle}>
        {doctors.map((doc, index) => {
          const isHovered = hovered === index;
          return (
            <div
              key={index}
              style={{
                ...cardBaseStyle,
                ...(isHovered ? cardHoverStyle : {}),
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  ...imgContainerBase,
                  ...(isHovered ? imgContainerHover : {}),
                }}
              >
                <img src={doc.img} alt={doc.name} style={imgStyle} />
              </div>
              <h3 style={nameStyle}>{doc.name}</h3>
              <p style={titleTextStyle}>{doc.title}</p>
              <p style={descStyle}>{doc.desc}</p>
              <div
                style={{
                  ...socialStyle,
                  ...(isHovered ? socialVisible : {}),
                }}
              >
                {doc.social.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    style={iconLinkStyle}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = iconLinkHoverStyle.color;
                      e.currentTarget.style.background = iconLinkHoverStyle.background;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = iconLinkStyle.color;
                      e.currentTarget.style.background = iconLinkStyle.background;
                    }}
                    aria-label="Social link"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Meet;
