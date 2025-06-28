import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/logo (2).png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  const isTabletOrMobile = screenWidth < 1025;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false); // hide on scroll down
      } else {
        setShowHeader(true); // show on scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "About",
    "Specialties",
    "Facilities",
    "Our Doctors",
    "Health Packages",
    "Insurance",
    "Blogs",
  ];

  return (
    <>
      <header
        style={{
          width: "100%", // ✅ Changed from 100vw
          backgroundColor: "#b9d9f4",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          margin: 0,
          padding: 0,
          position: "fixed",
          top: showHeader ? 0 : "-80px",
          left: 0,
          zIndex: 1000,
          boxSizing: "border-box",
          transition: "top 0.3s ease-in-out",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", // ✅ Allow wrapping
            height: "70px",
            padding: isTabletOrMobile ? "0 12px" : "0 24px",
            width: "100%",
            maxWidth: "1280px", // ✅ Prevent full-width stretch
            margin: "0 auto", // ✅ Center the container
            boxSizing: "border-box",
          }}
        >
          {/* Logo + Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isTabletOrMobile ? "24px" : "50px", // ✅ Responsive spacing
              flexWrap: "wrap",
              marginLeft: isTabletOrMobile ? "0px" : "-12px", // ✅ Moved slightly left
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={logo}
                alt="Hospital logo"
                style={{
                  width: isTabletOrMobile ? "160px" : "220px", // ✅ Responsive
                  height: "50px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Desktop Nav */}
            {!isTabletOrMobile && (
              <nav
                style={{
                  display: "flex",
                  gap: "25px",
                  fontSize: "12px",
                  color: "#1a202c",
                  fontWeight: 500,
                }}
              >
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#1a202c",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    {item}
                  </a>
                ))}
              </nav>
            )}
          </div>

          {/* Right Section */}
          {!isTabletOrMobile ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                color: "#1a202c",
                paddingRight: "90px",
              }}
            >
              <button
                aria-label="Search"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <FaSearch style={{ fontSize: "18px" }} />
              </button>
              <button
                aria-label="Menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setMenuOpen(true)}
              >
                <FaBars style={{ fontSize: "18px" }} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Mobile Menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                marginRight: "24px",
              }}
            >
              <FaBars style={{ fontSize: "18px" }} />
            </button>
          )}
        </div>
      </header>

      {/* Sidebar for Mobile/Tablet */}
      {menuOpen && isTabletOrMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "260px",
            height: "100vh",
            backgroundColor: "#fff",
            boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
            padding: "20px",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            style={{
              alignSelf: "flex-end",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <FaTimes />
          </button>

          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                margin: "12px 0",
                fontSize: "18px",
                color: "#1a202c",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
