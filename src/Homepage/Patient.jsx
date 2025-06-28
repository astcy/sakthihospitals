import React, { useState, useRef } from "react";
import arrowLeftWhite from "../assets/arrow-left-white.png";
import arrowLeftBlue from "../assets/arrow-left-blue.png";
import arrowRightWhite from "../assets/arrow-right-white.png";
import arrowRightBlue from "../assets/arrow-right-blue.png";

// Testimonials data
const testimonials = [
  {
    quote:
      "I had been suffering from painful periods and irregular cycles for years. After visiting several hospitals, I finally found the right diagnosis and care with Dr. Usha at Sakthi Hospital. She explained everything clearly and gave me a treatment plan that worked.",
    name: "S. Priyanka",
    location: "Royapettah, Chennai",
    image:
      "https://storage.googleapis.com/a1aa/image/96dd8467-6b61-49d0-9a82-1dbff0c0fe44.jpg",
  },
  {
    quote:
      "l was in unbearable pain due to a large kidney stone and had visited many hospitals with no clear solution. At Sakthi Hospital, Dr. Venkat diagnosed the problem quickly and explained the procedure with such clarity. The laser treatment was smooth, and I was back home the next day.He's truly the best urologist.",
    name: "M. Ramesh",
    location: "Triplicane, Chennai",
    image:
      "https://storage.googleapis.com/a1aa/image/9b0eb6dd-8bb9-4583-fdd3-c36f4f1685ab.jpg",
  },
];

const Patient = () => {
  const [hoveredDir, setHoveredDir] = useState(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -520, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 520, behavior: "smooth" });
  };

  return (
    <section
      style={{
        background: "linear-gradient(to bottom right, #d9e9f0, #7eb9f5)",
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1110px",
          margin: "0 auto",
          transform: "translateX(10px)",
        }}
      >
        {/* 🔷 HEADING SECTION START */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "500px" }}>
            <p
              style={{
                color: "#2a6db0",
                fontWeight: "600",
                fontSize: "14px",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              TESTIMONIALS
            </p>
            <h2
              style={{
                color: "#1f3e57",
                fontWeight: "800",
                fontSize: "32px",
                lineHeight: "1.3",
              }}
            >
              What Our Patients Say
              <br />
              About Us
            </h2>
          </div>

          {/* 🔷 ARROW BUTTONS START */}
          <div
            className="arrow-buttons"
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
              transform: "translateX(-30px)",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={scrollLeft}
              onMouseEnter={() => setHoveredDir("left")}
              onMouseLeave={() => setHoveredDir(null)}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                background: hoveredDir === "left" ? "#2a6db0" : "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "none",
                padding: 0,
              }}
            >
              <img
                src={hoveredDir === "left" ? arrowLeftWhite : arrowLeftBlue}
                alt="left arrow"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
            </button>

            <button
              onClick={scrollRight}
              onMouseEnter={() => setHoveredDir("right")}
              onMouseLeave={() => setHoveredDir(null)}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                background: hoveredDir === "right" ? "#2a6db0" : "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "none",
                padding: 0,
              }}
            >
              <img
                src={hoveredDir === "right" ? arrowRightWhite : arrowRightBlue}
                alt="right arrow"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
            </button>
          </div>
          {/* 🔷 ARROW BUTTONS END */}
        </div>
        {/* 🔷 HEADING SECTION END */}

        {/* 🔶 TESTIMONIAL CARDS START */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            paddingBottom: "20px",
            scrollBehavior: "smooth",
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 48%",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "30px",
                minHeight: "250px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  marginBottom: "12px",
                }}
              >
                <img
                  src={require("../assets/quote.png")}
                  alt="quote"
                  style={{ width: "32px", height: "32px", marginTop: "4px" }}
                />
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  {t.quote}
                </p>
              </div>
              <img
                src={require("../assets/stars.png")}
                alt="rating"
                style={{ width: "85px", alignSelf: "flex-start", marginLeft:"50px",}}
              />
            </div>
          ))}
        </div>
        {/* 🔶 TESTIMONIAL CARDS END */}

        {/* 🟡 AVATAR SECTION START */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "0",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div>
                <p
                  style={{
                    color: "#1f3e57",
                    fontWeight: "600",
                    fontSize: "14px",
                    marginBottom: "2px",
                    marginTop: "0",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "12px",
                    margin: "0",
                  }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* 🟡 AVATAR SECTION END */}
      </div>

      {/* 📱 RESPONSIVE STYLES */}
      <style>
        {`
          @media (max-width: 768px) {
            .arrow-buttons {
              display: none !important;
            }
            div[ref="scrollRef"] {
              overflow-x: auto !important;
              scroll-snap-type: x mandatory;
            }
            div[ref="scrollRef"] > div {
              scroll-snap-align: start;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Patient;
