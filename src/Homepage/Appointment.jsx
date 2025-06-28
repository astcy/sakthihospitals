import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import doctorImage from "../assets/doctor.png";
import { Calendar, Clock } from "lucide-react";

const Appointment = () => {
  // Responsive styles for the main content container
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ background: "#f9fcff", padding: "60px 0" }}>
      <SectionWrapper
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "32px" : "40px",
        }}
      >
        {/* 📝 Form Section */}
        <div style={{
          flex: "1 1 550px",
          minWidth: "280px",
          maxWidth: isMobile ? "100%" : "600px",
          margin: isMobile ? "0 auto" : "0",
        }}>
          <p
            style={{
              color: "#2a6db0",
              fontWeight: "600",
              fontSize: "16px",
              marginBottom: "8px",
            }}
          >
            BOOK AN
          </p>
          <h1
            style={{
              fontSize: isMobile ? "32px" : "44px",
              fontWeight: "800",
              letterSpacing: "0.5px",
              lineHeight: "1.3",
              marginBottom: "32px",
              color: "#1f2937",
            }}
          >
            Appointment
          </h1>

          <form>
            {/* Row 1: Name & Phone */}
            <div style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              flexDirection: isMobile ? "column" : "row",
            }}>
              <input
                type="text"
                placeholder="Name"
                defaultValue="David John"
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Phone Number"
                defaultValue="(123) 456 - 789"
                style={inputStyle}
              />
            </div>

            {/* Medical Record Number */}
            <input
              type="text"
              placeholder="Medical Record Number"
              defaultValue="123456-7890-0987"
              style={{ ...inputStyle, marginTop: "20px", width: "100%" }}
            />

            {/* Row 2: Date & Time */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
                flexWrap: "wrap",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div style={{ ...inputStyle, display: "flex", alignItems: "center", gap: "8px" }}>
                <Calendar size={18} />
                <span>August 24, 2023</span>
              </div>
              <div
                style={{
                  ...inputStyle,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Clock size={18} />
                  <span>3:30</span>
                </div>
                <span style={{ color: "#6b7280" }}>PM</span>
              </div>
            </div>

            {/* Reason for Visit */}
            <div style={{ marginTop: "30px" }}>
              <label style={labelStyle}>Reason for Visit</label>
              <div style={radioGroupStyle}>
                {["Routine Checkup", "New Patient Visit", "Specific Concern"].map((reason) => (
                  <label key={reason} style={radioLabelStyle}>
                    <input type="radio" name="reason" defaultChecked={reason === "New Patient Visit"} />
                    <span>{reason}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Department */}
            <div style={{ marginTop: "20px" }}>
              <label style={labelStyle}>Department</label>
              <div style={radioGroupStyle}>
                {["Pediatric", "Obstetrics and Gynecology", "Cardiology", "Neurology"].map((dept) => (
                  <label key={dept} style={radioLabelStyle}>
                    <input type="radio" name="department" defaultChecked={dept === "Obstetrics and Gynecology"} />
                    <span>{dept}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                marginTop: "30px",
                padding: "12px 28px",
                backgroundColor: "#2a6db0",
                color: "white",
                borderRadius: "8px",
                border: "none",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "16px",
                width: isMobile ? "100%" : "auto",
                transition: "background 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#1e4d7a"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "#2a6db0"}
            >
              Submit →
            </button>
          </form>
        </div>

        {/* 👩🏽‍⚕️ Image Section */}
        <div
          style={{
            flexShrink: 0,
            maxWidth: isMobile ? "100%" : "400px",
            minWidth: "220px",
            borderRadius: "20px",
            overflow: "hidden",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          <img
            src={doctorImage}
            alt="Doctor smiling with tablet"
            style={{
              width: "100%",
              height: isMobile ? "180px" : "auto",
              objectFit: "cover",
              display: "block"
            }}
          />
        </div>
      </SectionWrapper>
    </section>
  );
};

// 🔘 Shared styles
const inputStyle = {
  flex: "1",
  padding: "14px 18px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  background: "#ffffff",
  color: "#111827",
  fontSize: "15px",
  fontFamily: "Poppins, sans-serif",
  outline: "none",
  minWidth: "0",
  marginBottom: "0", // handled by parent
};

const labelStyle = {
  display: "block",
  color: "#1e293b",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "8px",
};

const radioGroupStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
};

const radioLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  color: "#334155",
};

export default Appointment;
