/*import React from "react";
import labImg from "../assets/lab.jpg";
import ctScanImg from "../assets/ctscan.jpg";
import ultrasoundImg from "../assets/ultrasound.jpg";
import bloodTestImg from "../assets/bloodtest.jpg";
import campImg from "../assets/camp.jpg";

const styles = {
  section: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "48px 16px",
    fontFamily: "'Inter', sans-serif",
    background: "#ffffff",
    boxSizing: "border-box",
  },
  sectionMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  header: {
    marginBottom: 32,
    maxWidth: 600,
    textAlign: "center",
  },
  subheading: {
    color: "#2563eb",
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: "0.04em",
    margin: 0,
  },
  title: {
    color: "#334155",
    fontWeight: 800,
    fontSize: 32,
    lineHeight: 1.3,
    margin: "8px 0 0 0",
  },
  gridDesktop: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "280px 200px",
    gap: 10,
    gridTemplateAreas: `
      "img1 img2 img3"
      "img4 img4 img5"
    `,
    overflow: "visible",
  },
  imgBase: {
    width: "100%",
    borderRadius: 16,
    display: "block",
  },
  img1: {
    gridArea: "img1",
    height: 280,
    objectFit: "cover",
  },
  img2: {
    gridArea: "img2",
    height: 280,
    objectFit: "cover",
  },
  img3: {
    gridArea: "img3",
    height: 430,
    marginTop: -142,
    objectFit: "contain",
    objectPosition: "top",
    backgroundColor: "transparent",
  },
  img4: {
    gridArea: "img4",
    height: 200,
    objectFit: "cover",
  },
  img5: {
    gridArea: "img5",
    height: 200,
    objectFit: "cover",
  },
  mobileImg: {
    width: "100%",
    maxWidth: 500,
    height: "auto",
    objectFit: "contain",
    borderRadius: 16,
  },
};

export default function Machine() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = width >= 1024;

  const imageMap = [
    { src: labImg, alt: "Scientist in lab", style: isDesktop ? styles.img1 : styles.mobileImg },
    { src: ctScanImg, alt: "CT scan", style: isDesktop ? styles.img2 : styles.mobileImg },
    { src: ultrasoundImg, alt: "Ultrasound machine", style: isDesktop ? styles.img3 : styles.mobileImg },
    { src: bloodTestImg, alt: "Blood test tubes", style: isDesktop ? styles.img4 : styles.mobileImg },
    { src: campImg, alt: "Medical camp", style: isDesktop ? styles.img5 : styles.mobileImg },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <p style={styles.subheading}>HAVE A LOOK AT</p>
        <h2 style={styles.title}>
          Our Facilities and <br />
          Latest Activities
        </h2>
      </div>

      {isDesktop ? (
        <div style={styles.gridDesktop}>
          {imageMap.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              style={{ ...styles.imgBase, ...img.style }}
            />
          ))}
        </div>
      ) : (
        <div style={styles.sectionMobile}>
          {imageMap.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              style={img.style}
            />
          ))}
        </div>
      )}
    </section>
  );
}
  */

import React from "react";
import labImg from "../assets/lab.jpg";
import ctScanImg from "../assets/ctscan.jpg";
import ultrasoundImg from "../assets/ultrasound.jpg";
import bloodTestImg from "../assets/bloodtest.jpg";
import campImg from "../assets/camp.jpg";

const images = [
  { src: labImg, alt: "Scientist in lab" },
  { src: ctScanImg, alt: "CT scan" },
  { src: ultrasoundImg, alt: "Ultrasound machine" },
  { src: bloodTestImg, alt: "Blood test tubes" },
  { src: campImg, alt: "Medical camp" },
];

const styles = {
  section: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "48px 16px",
    fontFamily: "'Figtree', 'Poppins', sans-serif",
    background: "#ffffff",
    boxSizing: "border-box",
    marginLeft: "90px",
  },
  header: {
    marginBottom: 32,
    maxWidth: 600,
  },
  subheading: {
    color: "#307bc4",
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: "0.04em",
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    color: "#274760",
    fontWeight: 800,
    fontSize: 40,
    lineHeight: 1.2,
    margin: "0 0 0 0",
    fontFamily: "'Figtree', sans-serif",
  },
  gridDesktop: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "280px 200px",
    gap: 10,
    gridTemplateAreas: `
      "img1 img2 img3"
      "img4 img4 img5"
    `,
    overflow: "visible",
  },
  imgBase: {
    width: "100%",
    borderRadius: 16,
    display: "block",
  },
  img1: {
    gridArea: "img1",
    height: 280,
    objectFit: "cover",
  },
  img2: {
    gridArea: "img2",
    height: 280,
    objectFit: "cover",
  },
  img3: {
    gridArea: "img3",
    height: 430,
    marginTop: -142,
    objectFit: "contain",
    objectPosition: "top",
    backgroundColor: "transparent",
  },
  img4: {
    gridArea: "img4",
    height: 200,
    objectFit: "cover",
  },
  img5: {
    gridArea: "img5",
    height: 200,
    objectFit: "cover",
  },
  // Mobile single image view
  singleImageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "320px",
    width: "100%",
    maxWidth: 400,
    margin: "0 auto",
  },
  singleImage: {
    width: "100%",
    maxWidth: 340,
    borderRadius: 16,
    objectFit: "cover",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    margin: "0 auto",
    display: "block",
  },
  navBtn: {
    background: "#437ea0",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "6px 18px",
    fontSize: 18,
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
  },
  slideCount: {
    marginTop: 10,
    color: "#437ea0",
    fontFamily: "'Poppins', sans-serif",
  },
};

export default function Machine() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = width >= 1024;

  // Navigation for mobile single image view
  const handlePrev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const handleNext = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <section
      style={{
        ...styles.section,
        marginLeft: isDesktop ? "90px" : 0,
        paddingLeft: isDesktop ? 16 : 8,
        paddingRight: isDesktop ? 16 : 8,
        paddingTop: isDesktop ? 48 : 28,
        paddingBottom: isDesktop ? 48 : 28,
      }}
    >
      <div style={{
        ...styles.header,
        marginLeft: isDesktop ? 0 : "auto",
        marginRight: isDesktop ? 0 : "auto",
        textAlign: isDesktop ? "left" : "center",
      }}>
        <p style={styles.subheading}>HAVE A LOOK AT</p>
        <h2 style={{
          ...styles.title,
          fontSize: isDesktop ? 40 : 26,
          lineHeight: isDesktop ? 1.2 : 1.15,
        }}>
          Our Facilities and <br />
          Latest Activities
        </h2>
      </div>

      {isDesktop ? (
        <div style={styles.gridDesktop}>
          <img src={images[0].src} alt={images[0].alt} style={{ ...styles.imgBase, ...styles.img1 }} />
          <img src={images[1].src} alt={images[1].alt} style={{ ...styles.imgBase, ...styles.img2 }} />
          <img src={images[2].src} alt={images[2].alt} style={{ ...styles.imgBase, ...styles.img3 }} />
          <img src={images[3].src} alt={images[3].alt} style={{ ...styles.imgBase, ...styles.img4 }} />
          <img src={images[4].src} alt={images[4].alt} style={{ ...styles.imgBase, ...styles.img5 }} />
        </div>
      ) : (
        <div style={styles.singleImageWrapper}>
          <img
            src={images[current].src}
            alt={images[current].alt}
            style={styles.singleImage}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16 }}>
            <button
              onClick={handlePrev}
              style={styles.navBtn}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              style={styles.navBtn}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
          <div style={styles.slideCount}>
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
