import React from "react";
import doctorImg from "../assets/doctor.png";
import bgPattern from "../assets/bgpattern.png";
import glowImg from "../assets/glow.png";
import { database } from "../firebase"; // Adjust path if needed
import { ref, set } from "firebase/database";
import { toast } from "react-toastify";

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
    backgroundColor: "none",
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
      maxWidth: "250px",
    },
    blueBg: {
        marginBottom:"10px",
      width: "64%",
      marginLeft: "70px",
      bottom: "0",
      height: "73%",
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




const [name, setName] = React.useState("");
const [phone, setPhone] = React.useState("");
const [mrn, setMrn] = React.useState("");
const [preferredDate, setPreferredDate] = React.useState("");
const [preferredTime, setPreferredTime] = React.useState("");
const [reason, setReason] = React.useState("new-patient");
const [department, setDepartment] = React.useState("obstetrics");


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !phone || !mrn || !preferredDate || !preferredTime) {
    toast.error("❌ Please fill in all required fields");
    return;
  }

  const today = new Date();
  const dateKey = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;
  const appointmentId = `appointment-${Date.now()}`;

  const appointmentRef = ref(database, `AppointmentsBlue/${dateKey}/${appointmentId}`);

  const appointmentData = {
    name,
    phone,
    mrn,
    preferredDate,
    preferredTime,
    reason,
    department,
    submittedAt: new Date().toISOString(),
  };

  try {
    await set(appointmentRef, appointmentData);
    toast.success("✅ Appointment submitted!");
    setName("");
    setPhone("");
    setMrn("");
    setPreferredDate("");
    setPreferredTime("");
    setReason("new-patient");
    setDepartment("obstetrics");
  } catch (error) {
    console.error("Firebase save error:", error);
    toast.error("❌ Submission failed. Try again.");
  }
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
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit} >
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}  >
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Name</label>
                <input style={styles.input} placeholder="David John" type="text" 
                value={name}
  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Phone Number</label>
                <input style={styles.input} placeholder="(123) 456 - 789" type="tel" 
                value={phone}
  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label style={styles.label}>Medical Record Number</label>
              <input style={styles.input} placeholder="123456-7890-0987" type="text" 
              value={mrn}
  onChange={(e) => setMrn(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Preferred Date</label>
                <input style={styles.input} type="date" 
                value={preferredDate}
  onChange={(e) => setPreferredDate(e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Preferred Time</label>
                <input style={styles.input} type="time" 
                value={preferredTime}
  onChange={(e) => setPreferredTime(e.target.value)}
                />
              </div>
            </div>
            <fieldset style={{ border: "none", padding: 0 }}>
              <legend style={styles.legend}>Reason for Visit</legend>
              <div style={styles.radioGroup}>
                <label style={styles.radioLabel}>
                  <input name="reason" type="radio" value="routine"
                    checked={reason === "routine"}
  onChange={(e) => setReason(e.target.value)}
                  />
                  Routine Checkup
                </label>
                <label style={styles.radioLabel}>
                  <input name="reason" type="radio" value="new-patient" 
                   checked={reason === "new-patient"}
        onChange={(e) => setReason(e.target.value)}
                  />
                  New Patient Visit
                </label>
                <label style={styles.radioLabel}>
                  <input name="reason" type="radio" value="specific-concern"
                   checked={reason === "specific-concern"}
        onChange={(e) => setReason(e.target.value)}
                  />
                  Specific Concern
                </label>
              </div>
            </fieldset>
            <fieldset style={{ border: "none", padding: 0 }}>
              <legend style={styles.legend}>Department</legend>
              <div style={styles.radioGroup}>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="pediatric" 
                  checked={department === "pediatric"}
        onChange={(e) => setDepartment(e.target.value)}
                  />
                  Pediatric
                </label>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="obstetrics" 
                  checked={department === "obstetrics"}
        onChange={(e) => setDepartment(e.target.value)}
                  />
                  Obstetrics and Gynecology
                </label>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="cardiology"
                  checked={department === "cardiology"}
        onChange={(e) => setDepartment(e.target.value)}
                  />
                  Cardiology
                </label>
                <label style={styles.radioLabel}>
                  <input name="department" type="radio" value="neurology" 
                   checked={department === "neurology"}
        onChange={(e) => setDepartment(e.target.value)}
                  />
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
