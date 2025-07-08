import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// List of facilities (slugs must match keys in Facitem's facilities object)
const items = [
  { title: "Emergency & Trauma Care", slug: "emergency" },
  { title: "Laboratory Services", slug: "lab" },
  { title: "Pharmacy", slug: "pha" },
  { title: "Dialysis", slug: "dia" },
  { title: "Operation Theater", slug: "oper" },
];

export default function Bar1({ active, onSelect }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Breadcrumb navigation handler
  const handleNav = (target) => {
    if (target === "home") navigate("/");
    else if (target === "doctors") navigate("/doctors");
    else if (target === "details") {
      if (!location.pathname.startsWith("/facilities")) {
        navigate("/facilities");
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#fcfdfe",
        borderBottom: "1px solid #F1F5F9",
        padding: "0 0 13px 0",
        fontFamily: "Poppins, sans-serif",
        marginLeft: "0px",
      }}
    >
      <div
        className="bar1-responsive-container"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: isMobile ? "40px 8px 0 8px" : "80px 16px",
          boxSizing: "border-box",
        }}
      >
        {/* Breadcrumb Navigation */}
        <nav
          style={{
            paddingTop: 24,
            fontSize: 14,
            color: "#64748B",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ol
            style={{
              display: "flex",
              gap: "6px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li
              style={{
                color: "#bec8cf",
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 300,
                fontSize: 16,
                transition: "color 0.18s",
              }}
              onClick={() => handleNav("home")}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNav("home");
              }}
              role="button"
            >
              Home
            </li>
            <li
              style={{
                color: "#bec8cf",
                fontWeight: 400,
                fontSize: 12,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              /
            </li>
            <li
              style={{
                color: "#bec8cf",
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 300,
                fontSize: 16,
                transition: "color 0.18s",
              }}
              onClick={() => handleNav("doctors")}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNav("doctors");
              }}
              role="button"
            >
              Doctors
            </li>
            <li
              style={{
                color: "#bec8cf",
                fontWeight: 400,
                fontSize: 12,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              /
            </li>
            <li
              style={{
                color: "#bec8cf",
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 300,
                fontSize: 16,
                transition: "color 0.18s",
              }}
              onClick={() => handleNav("details")}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNav("details");
              }}
              role="button"
            >
              Details
            </li>
          </ol>
        </nav>

        {/* Facility Buttons */}
        <div
          className="bar1-responsive-row"
          style={{
            marginTop: 24,
            borderBottom: "2px solid #F1F5F9",
            padding: isMobile ? "10px 0" : "16px 0",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            gap: isMobile ? "10px" : "0",
            width: "100%",
          }}
        >
          <div
            className="bar1-btn-group"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? "7px" : "10px",
              width: isMobile ? "100%" : "auto",
              justifyContent: isMobile ? "flex-start" : "flex-start",
            }}
          >
            {items.map((item) => (
              <button
                key={item.slug}
                className="bar1-btn"
                style={{
                  border: "1.2px solid #cbdef0",
                  background: active === item.slug ? "#3b82c4" : "#fff",
                  color: active === item.slug ? "#fff" : "#334155",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: active === item.slug ? 600 : 200,
                  fontSize: isMobile ? 12 : 13,
                  borderRadius: 9,
                  padding: isMobile ? "6px 10px" : "6px 14px",
                  cursor: "pointer",
                  outline: "none",
                  minWidth: isMobile ? 70 : 90,
                  transition: "background 0.2s, color 0.2s, border 0.2s",
                }}
                onClick={() => onSelect(item.slug)}
                onMouseOver={(e) => {
                  if (active !== item.slug) e.currentTarget.style.background = "#3b82c4";
                  if (active !== item.slug) e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  if (active !== item.slug) e.currentTarget.style.background = "#fff";
                  if (active !== item.slug) e.currentTarget.style.color = "#334155";
                }}
                aria-pressed={active === item.slug}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles for mobile only */}
      <style>
        {`
          @media (max-width: 700px) {
            .bar1-responsive-container {
              padding: 40px 8px 0 8px !important;
              margin-left: 0 !important;
              max-width: 100vw !important;
              box-sizing: border-box;
            }
            .bar1-responsive-row {
              flex-direction: column !important;
              gap: 10px !important;
              align-items: stretch !important;
              padding: 10px 0 !important;
            }
            .bar1-btn-group {
              width: 100% !important;
              gap: 7px !important;
              flex-wrap: wrap !important;
              justify-content: flex-start !important;
            }
            .bar1-btn {
              min-width: 70px !important;
              font-size: 12px !important;
              padding: 6px 10px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
