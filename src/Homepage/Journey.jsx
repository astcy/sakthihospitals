import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import journey from "../assets/journey.png";
import overlayIcon from "../assets/overlayIcon.png";

const Journey = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive overrides for mobile only
  const responsive = isMobile
    ? {
        outer: {
          padding: 0,
        },
        inner: {
          minHeight: "auto",
          padding: "1.2rem 0.5rem",
          marginTop: "-5px",
        },
        motionDiv: {
          flexDirection: "column",
          gap: "1.2rem",
          marginLeft: 0,
        },
        leftImg: {
          maxWidth: "98vw",
          width: "100%",
        },
        img: {
          borderRadius: "12px",
        },
        overlay: {
          width: "220px",
          height: "190px",
          right: "-25px",
          bottom: "-8px",
        },
        rightText: {
          maxWidth: "98vw",
          paddingTop: "1.2rem",
          textAlign: "center",
        },
        h2: {
          fontSize: "2rem",
          marginBottom: "0.8rem",
        },
        pTitle: {
          fontSize: "1.1rem",
          marginBottom: "1.2rem",
        },
        h4: {
          fontSize: "1rem",
          marginBottom: "0.7rem",
        },
        pBody: {
          fontSize: "0.95rem",
          maxWidth: "100%",
        },
      }
    : {};

  return (
    <div
      style={{
        width: "100%",
        background: "white",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        ...responsive.outer,
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          padding: "3rem 6rem",
          fontFamily: "Poppins, sans-serif",
          maxWidth: "1400px",
          margin: "0 auto",
          marginTop: "-10px",
          position: "relative",
          boxSizing: "border-box",
          ...responsive.inner,
        }}
      >
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              marginLeft: "-10px",
              width: "100%",
              display: "flex",
              flexDirection: window.innerWidth >= 1024 ? "row" : "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "3rem",
              ...responsive.motionDiv,
            }}
          >
            {/* Left Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: "relative",
                flex: "1 1 50%",
                maxWidth: "600px",
                width: "100%",
                ...responsive.leftImg,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "visible",
                }}
              >
                <img
                  src={journey}
                  alt="Sakthi Hospital Journey"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                    objectFit: "cover",
                    display: "block",
                    ...responsive.img,
                  }}
                />

                {/* Overlay Icon */}
                <img
                  src={overlayIcon}
                  alt="Decorative Icon"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "-10px",
                    width: "280px",
                    height: "300px",
                    objectFit: "contain",
                    zIndex: 10,
                    ...responsive.overlay,
                  }}
                />
              </div>
            </motion.div>

            {/* Right Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                flex: "1 1 50%",
                maxWidth: "600px",
                textAlign: "left",
                paddingTop: window.innerWidth < 1024 ? "2rem" : "0",
                ...responsive.rightText,
              }}
            >
              <h2
                style={{
                  fontSize: "3rem",
                  color: "#1e3a56",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  fontFamily: "Figtree, sans-serif",
                  ...responsive.h2,
                }}
              >
                About Us
              </h2>

              <p
                style={{
                  color: "#1687df",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                  marginBottom: "2rem",
                  lineHeight: "1.4",
                  fontFamily: "Figtree, sans-serif",
                  ...responsive.pTitle,
                }}
              >
                Sakthi Hospital – Where Healing Begins
                <br />
                with The Heart
              </p>

              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "#a6b5c0",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                  fontFamily: "Figtree, sans-serif",
                  ...responsive.h4,
                }}
              >
                <span
                  style={{
                    color: "#0c8ce9",
                    fontSize: "1.6rem",
                    fontWeight: "700",
                  }}
                >
                  →
                </span>
                Our Happy Journey
              </h4>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  maxWidth: "90%",
                  fontFamily: "Poppins, sans-serif",
                  ...responsive.pBody,
                }}
              >
                Sakthi hospital was started in the year 1985 in Mannady, as a
                4-bedded women’s health centre. It later shifted to Triplicane,
                Chennai, as Sakthi Nursing Home and Scan Centre in the year
                2000 with 25 beds.
              </p>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Journey;
