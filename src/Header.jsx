import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    { label: "About", path: "/about" },
    { label: "Specialties", path: "/specialties" },
    { label: "Facilities", path: "/facilities" },
    { label: "Our Doctors", path: "/doctors" },
    { label: "Health Packages", path: "/packages" },
    { label: "Insurance", path: "/insurance" },
    { label: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      <header
        style={{
          width: "100%",
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
            flexWrap: "wrap",
            height: "70px",
            padding: isTabletOrMobile ? "0 12px" : "0 24px",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Logo + Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isTabletOrMobile ? "24px" : "50px",
              flexWrap: "wrap",
              marginLeft: isTabletOrMobile ? "0px" : "-12px",
            }}
          >
           <Link
  to="/"
  onClick={() => setMenuOpen(false)} // closes sidebar on mobile
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  }}
>
  <img
    src={logo}
    alt="Hospital logo"
    style={{
      width: isTabletOrMobile ? "160px" : "220px",
      height: "50px",
      objectFit: "contain",
    }}
  />
</Link>
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
                  <Link
                    key={item.label}
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: "#1a202c",
                      transition: "text-decoration 0.2s",
                    }}
                    onMouseEnter={e =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={e =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    {item.label}
                  </Link>
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
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              style={{
                margin: "12px 0",
                fontSize: "18px",
                color: "#1a202c",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
