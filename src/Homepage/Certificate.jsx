import React, { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

// Image-based Certificate Card
const CertificateLogoCard = ({ label, src, alt, width }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: width,
      minHeight: "200px",
      textAlign: "center",
    }}
  >
    <p
      style={{
        fontSize: "10px",
        color: "#1f3c56",
        fontWeight: "600",
        marginBottom: "12px",
        whiteSpace: "pre-line",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {label}
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "110px",
          height: "95px",
          objectFit: "contain",
          marginBottom: "20px",
        }}
      />
    </div>
  </div>
);

// Text-based Certificate Card
const CertificateTextCard = ({ icon, title, desc, alignTop = false, width }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: alignTop ? "flex-start" : "space-between",
      width: width,
      minHeight: "200px",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        marginBottom: "12px",
        gap: "10px",
      }}
    >
      <div
        style={{
          background: "#2a73cc",
          borderRadius: "8px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontSize: "11px",
          fontWeight: "600",
          color: "#1f3c56",
          textAlign: "left",
          lineHeight: 1.4,
          fontFamily: "'Figtree', sans-serif",
        }}
      >
        {title}
      </p>
    </div>
    <p
      style={{
        fontSize: "10px",
        color: "#9ca3af",
        textAlign: "left",
        lineHeight: "1.5",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {desc}
    </p>
  </div>
);

// Main Certificate Section
const Certificate = () => {
  const [cardWidth, setCardWidth] = useState("240px");

  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCardWidth("calc(50% - 20px)");
      } else {
        setCardWidth("240px");
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  return (
    <section
      style={{
        background: "#f9fbff",
        padding: "60px 40px",
        maxWidth: "1300px",
        width: "100%",
        margin: "0 auto",
        marginLeft: "90px",
      }}
    >
      <h2
        style={{
          fontSize: "46px",
          color: "#1f3c56",
          fontWeight: "700",
          fontFamily: "'Figtree', sans-serif",
          marginBottom: "30px",
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "28px",
          justifyContent: "flex-start",
        }}
      >
        <CertificateLogoCard
          label={"National Accreditation Board for\nHospitals & Healthcare Providers"}
          src={logo1}
          alt="National Accreditation Board Logo"
          width={cardWidth}
        />

        <CertificateLogoCard
          label={"ISO certification : 9001"}
          src={logo2}
          alt="ISO certification logo"
          width={cardWidth}
        />

        <CertificateTextCard
          icon={<FaAward size={28} color="#fff" />}
          title="Healthgrades National’s Best Hospital"
          desc="This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures."
          width={cardWidth}
        />

        <CertificateTextCard
          icon={<FaAward size={28} color="#fff" />}
          title="Joint Commission Gold Seal of Approval"
          desc="This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care."
          alignTop={true}
          width={cardWidth}
        />
      </div>
    </section>
  );
};

export default Certificate;
