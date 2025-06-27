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

const Meet = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        background: "#fff",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
        minHeight: "100vh",
        boxSizing: "border-box",
        maxWidth: "1300px",
        margin: "0 auto", // Ensure center alignment on all devices
      }}
    >
      <div style={{ marginBottom: 60 }}>
        <h4
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#307bc4",
            textTransform: "uppercase",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          MEET OUR
        </h4>
        <h2
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontSize: 44,
            fontWeight: 700,
            color: "#1e293b",
            margin: "10px 0 50px 0",
          }}
        >
          Experts Doctor
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "36px",
        }}
      >
        {doctors.map((doc, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: 375,
                minHeight: 500,
                borderRadius: 18,
                boxShadow: isHovered
                  ? "0 4px 16px 0 rgba(28,56,90,0.07)"
                  : "none",
                background: isHovered ? "#fff" : "transparent",
                paddingBottom: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                transition: "all 0.18s ease-in-out",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 260,
                  borderRadius: "14px 14px 0 0",
                  background: isHovered ? "#e8f4fd" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  style={{
                    width: "92%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#1e293b",
                  margin: "10px 0 6px",
                  fontFamily: "'Figtree', sans-serif",
                }}
              >
                {doc.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#334155",
                  margin: "0 0 12px",
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {doc.title}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#64748b",
                  lineHeight: 1.6,
                  fontFamily: "'Poppins', sans-serif",
                  margin: "0 0 10px",
                }}
              >
                {doc.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  justifyContent: "center",
                  opacity: isHovered ? 1 : 0,
                  pointerEvents: isHovered ? "auto" : "none",
                  transition: "opacity 0.25s ease-in-out",
                }}
              >
                {doc.social.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    style={{
                      background: "#e8f4fd",
                      color: "#2563eb",
                      width: 38,
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      transition: "0.3s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#2563eb";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#e8f4fd";
                      e.currentTarget.style.color = "#2563eb";
                    }}
                    aria-label="Social profile"
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
