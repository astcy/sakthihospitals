import React from "react";
import awardImage from "../assets/award.png"; // Use your local image

const awards = [
  { title: "Malcolm Baldrige National Quality Award" },
  { title: "HIMSS Davies Award" },
  { title: "Healthgrades National’s Best Hospital" },
  { title: "Joint Commission Gold Seal of Approval" },
];

const styles = {
  section: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "36px 1px 0 1px",
    background: "#fff",
    boxSizing: "border-box",
    textAlign: "center",
    marginLeft: "90px",
  },
  label: {
    color: "#307bc4",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "0.04em",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  heading: {
    color: "#274760",
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 600,
    fontSize: 44,
    lineHeight: 1.1,
    margin: "0 0 10px 0",
  },
  subheading: {
    color: "#ced6db",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    fontSize: 10,
    margin: "0 0 22px 0",
    letterSpacing: 0,
  },
  cardsRow: {
    display: "flex",
    justifyContent: "center",
    gap: 18,
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 2px 12px 0 rgba(30, 41, 59, 0.06)",
    display: "flex",
    alignItems: "center",
    gap: 18,
    padding: "24px 28px",
    minWidth: 270,
    maxWidth: 320,
    flex: "1 1 270px",
    boxSizing: "border-box",
    marginBottom: 20,
    transition: "box-shadow 0.2s",
  },
  iconBox: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    background: "#307bc4",
    borderRadius: 12,
  },
  awardImg: {
    width: 32,
    height: 32,
    objectFit: "contain",
    display: "block",
  },
  cardTitle: {
    fontFamily: "'Poppins', sans-serif",
    color: "#5d7587",
    fontWeight: 300,
    fontSize: 15,
    textAlign: "left",
    lineHeight: 1.4,
    margin: 0,
  },
  // Mobile-specific styles for 2 cards per row
  mobileCardsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  mobileCard: {
    width: "calc(50% - 6px)", // Two cards per row with small gap
    minWidth: 0,
    maxWidth: 340,
    marginBottom: 0,
    padding: "16px 8px",
    borderRadius: 18,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    marginLeft: 0,
    marginRight: 0,
  },
};

function useResponsiveStyles() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const isMobile = width < 900;
  return isMobile;
}

export default function Award() {
  const isMobile = useResponsiveStyles();

  return (
    <section
      style={{
        ...styles.section,
        marginLeft: isMobile ? 0 : "90px",
        paddingLeft: isMobile ? 0 : "1px",
        paddingRight: isMobile ? 0 : "1px",
      }}
    >
      <div style={styles.label}>AWARDS</div>
      <h2
        style={
          isMobile
            ? { ...styles.heading, fontSize: 28 }
            : styles.heading
        }
      >
        Winning Awards and <br /> Recognition
      </h2>
      <div
        style={
          isMobile
            ? { ...styles.subheading, fontSize: 13, margin: "0 0 18px 0" }
            : styles.subheading
        }
      >
        We have been recognized for our commitment to <br />
        excellence in healthcare.
      </div>
      <div
        style={
          isMobile
            ? { ...styles.cardsRow, ...styles.mobileCardsRow }
            : styles.cardsRow
        }
      >
        {awards.map((award, idx) => (
          <div
            key={idx}
            style={
              isMobile
                ? { ...styles.card, ...styles.mobileCard }
                : styles.card
            }
          >
            <span style={styles.iconBox}>
              <img src={awardImage} alt="Award Icon" style={styles.awardImg} />
            </span>
            <span style={styles.cardTitle}>{award.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
