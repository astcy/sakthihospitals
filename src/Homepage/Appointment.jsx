import React from "react";
import doctorImg from "../assets/doctor.png";
import bgPattern from "../assets/bgpattern.png";
import glowImg from "../assets/glow.png";

const styles = {
main: {
  minHeight: "100%",
  background: "#fff",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px 16px",

  backgroundImage: `url(${bgPattern})`,
  backgroundRepeat: "no-repeat",

  // ✅ Limit to right side below doctor image
  backgroundSize: "320px auto",                // Adjust width of the pattern
  backgroundPosition: "calc(80% - 10px) 80%", // Right-aligned (10px from edge), bottom-aligned
},

  container: {
    display: "flex",
    flexDirection: "row",
    gap: "140px",
    maxWidth: "1200px",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  formSection: {
    flex: 1,
    maxWidth: "600px",
    width: "100%",
    marginTop: "10px",
  },
  label: {
    fontSize: "13px",
    color: "#334155",
    marginBottom: "8px",
    fontWeight: 500,
    display: "block",
  },
  input: {
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#64748b",
    outline: "none",
  },
  radioGroup: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  radioLabel: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#334155",
    cursor: "pointer",
  },
  legend: {
    fontSize: "13px",
    color: "#334155",
    marginBottom: "6px",
    fontWeight: 500,
  },
  submitBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    background: "#307bc4",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: "999px",
    padding: "10px 24px",
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginTop: "20px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  imgSection: {
    flex: 1,
    maxWidth: "350px",
    width: "100%",
    position: "relative",
    minHeight: "360px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: "#f3f8ff",
  },
  blueBg: {
    position: "absolute",
    bottom: "10px", // starts from bottom of image
    left: "10px",   // aligned to left
    width: "100%",
    height: "auto",
    zIndex: 0,
    opacity: 0.6,
    pointerEvents: "none",
  },
  doctorImg: {
    position: "relative",
    borderRadius: "24px",
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    objectFit: "cover",
    zIndex: 1,
  },
  '@media (max-width: 900px)': {
    container: {
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
    },
    imgSection: {
      maxWidth: "100%",
      minHeight: "300px",
    },
    doctorImg: {
      maxWidth: "300px",
    },
    blueBg: {
      width: "100%",
      left: "0",
      bottom: "0",
    },
  },
};

function Appointment() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 900);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveStyles = isMobile
    ? {
        container: { ...styles.container, ...styles['@media (max-width: 900px)'].container },
        imgSection: { ...styles.imgSection, ...styles['@media (max-width: 900px)'].imgSection },
        doctorImg: { ...styles.doctorImg, ...styles['@media (max-width: 900px)'].doctorImg },
        blueBg: { ...styles.blueBg, ...styles['@media (max-width: 900px)'].blueBg },
      }
    : {
        container: styles.container,
        imgSection: styles.imgSection,
        doctorImg: styles.doctorImg,
        blueBg: styles.blueBg,
      };

  return (
    <main style={styles.main}>
      <div style={responsiveStyles.container}>
        <section style={styles.formSection}>
          <p style={{ color: "#307bc4", fontWeight: 600, fontSize: "14px", marginBottom: "0", letterSpacing: "1px" }}>
            BOOK AN
          </p>
          <h1 style={{ fontSize: "32px", fontWeight: 500, color: "#0f172a", margin: "6px 0 28px", fontFamily: "'Figtree', sans-serif" }}>
            Appointment
          </h1>
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Name</label>
                <input style={styles.input} placeholder="David John" type="text" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Phone Number</label>
                <input style={styles.input} placeholder="(123) 456 - 789" type="tel" />
              </div>
            </div>
            <div>
              <label style={styles.label}>Medical Record Number</label>
              <input style={styles.input} placeholder="123456-7890-0987" type="text" />
            </div>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Preferred Date</label>
                <input style={styles.input} type="date" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Preferred Time</label>
                <input style={styles.input} type="time" />
              </div>
            </div>
            <fieldset style={{ border: "none", padding: 0 }}>
              <legend style={styles.legend}>Reason for Visit</legend>
              <div style={styles.radioGroup}>
                <label style={styles.radioLabel}>
                  <input name="reason" type="radio" value="routine" />
                  Routine Checkup
                </label>
                <label style={styles.radioLabel}>
                  <input name="reason" type="radio" value="new-patient" defaultChecked />
                  New Patient Visit
                </label>
                <label style={styles.radioLabel}>
                  <input name="reason" type="radio" value="specific-concern" />
                  Specific Concern
                </label>
              </div>
            </fieldset>
            <fieldset style={{ border: "none", padding: 0 }}>
              <legend style={styles.legend}>Department</legend>
              <div style={styles.radioGroup}>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="pediatric" />
                  Pediatric
                </label>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="obstetrics" defaultChecked />
                  Obstetrics and Gynecology
                </label>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="cardiology" />
                  Cardiology
                </label>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="neurology" />
                  Neurology
                </label>
              </div>
            </fieldset>
            <button type="submit" style={styles.submitBtn}>
              Submit
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </section>
        <section style={responsiveStyles.imgSection}>
          <img src={glowImg} alt="Blue Glow" style={responsiveStyles.blueBg} />
          <img src={doctorImg} alt="Doctor" style={responsiveStyles.doctorImg} draggable={false} />
        </section>
      </div>
    </main>
  );
}

export default Appointment;
