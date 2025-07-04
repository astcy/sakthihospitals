import React from "react";
import pinkBg from "../assets/pinkBg.png"; // Pink background image
import shape2 from "../assets/shape2.png"; // New image to show instead of doctor

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
    backgroundRepeat: "no-repeat",
    backgroundSize: "320px auto",
    backgroundPosition: "calc(80% - 10px) 80%",
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
    background: "#f72585",
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
    backgroundColor: "none",
    overflow: "visible",
  },
 pinkBg: {
  position: "absolute",
  marginTop: "70px",              // <-- anchor to top
  left: "0",
  width: "97%",
  height: "82%",
  zIndex: 0,
  pointerEvents: "none",
  objectFit: "content",
  opacity: 0.95,
  borderRadius: "20px",
},

  shape2: {
    position: "relative",
    borderRadius: "24px",
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    objectFit: "cover",
    zIndex: 2,
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
    shape2: {
      maxWidth: "250px",
    },
    pinkBg: {
        marginBottom:"10px",
      width: "64%",
      marginLeft: "70px",
      bottom: "0",
      height: "73%",
    },
  },
};

function Appointment1() {
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
        shape2: { ...styles.shape2, ...styles['@media (max-width: 900px)'].shape2 },
        pinkBg: { ...styles.pinkBg, ...styles['@media (max-width: 900px)'].pinkBg },
      }
    : {
        container: styles.container,
        imgSection: styles.imgSection,
        shape2: styles.shape2,
        pinkBg: styles.pinkBg,
      };

  return (
    <main style={styles.main}>
      <div style={responsiveStyles.container}>
        <section style={styles.formSection}>
          <p style={{ color: "#f72585", fontWeight: 600, fontSize: "14px", marginBottom: "0", letterSpacing: "1px" }}>
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
          <img src={pinkBg} alt="Pink Glow" style={responsiveStyles.pinkBg} />
          <img src={shape2} alt="Shape" style={responsiveStyles.shape2} draggable={false} />
        </section>
      </div>
    </main>
  );
}

export default Appointment1;
