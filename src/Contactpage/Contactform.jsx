import React, { useState, useEffect } from "react";

// Fonts and Icons (include in index.html head):
// <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
// <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">

const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [hover, setHover] = useState(false);

  const [fields, setFields] = useState({
    name: "",
    phone: "",
    medical: "",
    reason: "",
    department: "Cardiology",
    date: "",
    time: "",
    ampm: "",
    message: "",
  });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const font = "'Poppins', sans-serif";

  const styles = {
    container: {
      background: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "40px 16px",
      fontFamily: font,
    },
    wrapper: {
      position: "relative",
      width: "100%",
      maxWidth: 768,
      background: "#fff",
      borderRadius: 24,
      boxShadow: "0 8px 32px rgba(30,41,59,0.08)",
      padding: "60px 32px 40px",
      boxSizing: "border-box",
      marginTop: isMobile ? "-40px" : "-80px", // Overlay effect
      zIndex: 10,
      // Remove any background or overlay color change on overlap
      // No background blending or change here
    },
    topImg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 100,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      objectFit: "cover",
      zIndex: -1,
      pointerEvents: "none",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
    },
    row: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: 24,
    },
    inputGroup: {
      flex: 1,
      position: "relative",
    },
    label: {
      fontSize: 11,
      fontWeight: 600,
      color: "#334155",
      marginBottom: 6,
      display: "block",
      fontFamily: font,
    },
    input: {
      width: "100%",
      borderRadius: 24,
      border: "1px solid #94a3b8",
      fontSize: 13,
      color: "#64748b",
      padding: "12px 20px",
      fontFamily: font,
      boxSizing: "border-box",
      outline: "none",
      background: "#fff", // Always white, no overlay color
      transition: "border-color 0.2s",
    },
    select: {
      width: "100%",
      borderRadius: 24,
      border: "1px solid #94a3b8",
      fontSize: 13,
      color: "#64748b",
      padding: "12px 20px",
      paddingRight: 40,
      backgroundColor: "#fff",
      fontFamily: font,
      backgroundImage:
        "url('data:image/svg+xml;utf8,<svg fill=\"%2364748b\" height=\"16\" viewBox=\"0 0 20 20\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z\"/></svg>')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 16px center",
      backgroundSize: "18px 18px",
      appearance: "none",
    },
    icon: {
      position: "absolute",
      right: 24,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#64748b",
      fontSize: 14,
    },
    dateTimeWrap: {
      display: "flex",
      alignItems: "center",
      borderRadius: 24,
      border: "1px solid #94a3b8",
      padding: "12px 20px",
      color: "#64748b",
      fontSize: 13,
      fontFamily: font,
      backgroundColor: "#fff",
    },
    submit: {
      marginTop: 16,
      backgroundColor: hover ? "#1e40af" : "#2563eb",
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      fontFamily: font,
      borderRadius: 9999,
      padding: "10px 24px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "160px",
      justifyContent: "center",
    },
    textarea: {
      width: "100%",
      borderRadius: 24,
      border: "1px solid #94a3b8",
      fontSize: 13,
      color: "#64748b",
      padding: "12px 20px",
      fontFamily: font,
      boxSizing: "border-box",
      outline: "none",
      resize: "vertical",
      minHeight: 80,
      background: "#fff", // Always white, no overlay color
    },
  };

  const handleChange = (field, value) =>
    setFields((prev) => ({ ...prev, [field]: value }));

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
       
        <form style={styles.form} autoComplete="off">
          {/* Row 1: Name & Phone */}
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                id="name"
                style={styles.input}
                placeholder="Enter name"
                value={fields.name}
                onChange={e => handleChange("name", e.target.value)}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="phone" style={styles.label}>Phone Number</label>
              <input
                id="phone"
                style={styles.input}
                placeholder="Enter phone"
                value={fields.phone}
                onChange={e => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          {/* Medical Record */}
          <div>
            <label htmlFor="medical" style={styles.label}>Medical Record Number</label>
            <input
              id="medical"
              style={styles.input}
              placeholder="Enter number"
              value={fields.medical}
              onChange={e => handleChange("medical", e.target.value)}
            />
          </div>

          {/* Row 2: Reason & Department */}
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="reason" style={styles.label}>Reason for Visit</label>
              <select
                id="reason"
                style={styles.select}
                value={fields.reason}
                onChange={e => handleChange("reason", e.target.value)}
              >
                <option>Routine Checkup</option>
                <option>Consultation</option>
                <option>Follow Up</option>
              </select>
              <i className="fas fa-chevron-down" style={styles.icon}></i>
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="department" style={styles.label}>Department</label>
              <select
                id="department"
                style={styles.select}
                value={fields.department}
                onChange={e => handleChange("department", e.target.value)}
              >
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
              </select>
              <i className="fas fa-chevron-down" style={styles.icon}></i>
            </div>
          </div>

          {/* Row 3: Date & Time */}
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="date" style={styles.label}>Preferred Date</label>
              <div style={styles.dateTimeWrap}>
                <i className="far fa-calendar-alt" style={{ marginRight: 12 }} />
                <input
                  id="date"
                  type="text"
                  value={fields.date}
                  placeholder="Preferred Date"
                  onChange={e => handleChange("date", e.target.value)}
                  style={{
                    fontFamily: font,
                    fontSize: 13,
                    color: "#64748b",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <div style={{ ...styles.inputGroup, display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="time" style={styles.label}>Preferred Time</label>
                <div style={styles.dateTimeWrap}>
                  <i className="far fa-clock" style={{ marginRight: 12 }} />
                  <input
                    id="time"
                    type="text"
                    value={fields.time}
                    placeholder="Preferred Time"
                    onChange={e => handleChange("time", e.target.value)}
                    style={{
                      fontFamily: font,
                      fontSize: 13,
                      color: "#64748b",
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <div style={{ width: 64 }}>
                <label style={styles.label}>AM/PM</label>
                <input
                  type="text"
                  value={fields.ampm}
                  placeholder="AM/PM"
                  onChange={e => handleChange("ampm", e.target.value)}
                  style={{
                    ...styles.input,
                    textAlign: "center",
                    padding: "12px 0",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              rows={4}
              style={styles.textarea}
              placeholder="Write your message here..."
              value={fields.message}
              onChange={e => handleChange("message", e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={styles.submit}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span>Submit</span>
            <i className="fas fa-arrow-right" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
