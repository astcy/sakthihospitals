import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// List of all specialties
const items = [
  { title: "Obstetrics & Gynecology", slug: "gyn" },
  { title: "Urology", slug: "urology" },
  { title: "Orthopedics", slug: "ortho" },
  { title: "Diabetology", slug: "diabetes" },
  { title: "Pediatrics", slug: "pediatrics" },
  { title: "Gastroenterology", slug: "gastro" },
  { title: "ENT", slug: "ent" },
  { title: "Cardiology", slug: "cardio" },
  { title: "General Surgery", slug: "surgery" },
];

const buttonGroups = [
  { label: "All", value: "all" },
  { label: "Urology", value: "urology" },
  { label: "Gynecology", value: "gyn" },
  { label: "Cardiology", value: "cardio" },
  { label: "Orthopedics", value: "ortho" },
  { label: "Others", value: "others" },
];

const othersSlugs = [
  "ent", "diabetes", "gastro", "pediatrics", "surgery",
];

const mainSlugs = ["urology", "cardio", "gyn", "ortho"];

// Responsive hook
function useResponsive() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const styles = {
  wrapper: {
    width: "100%",
    background: "#fcfdfe",
    borderBottom: "1px solid #F1F5F9",
    padding: "0 0 13px 0",
    fontFamily: "Poppins, sans-serif",
    marginLeft: "0px",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "80px 16px",
  },
  nav: {
    paddingTop: 24,
    fontSize: 14,
    color: "#64748B",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
  },
  navList: {
    display: "flex",
    gap: "6px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: "#c6cfd5",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "'Figtree', sans-serif",
    fontWeight: 300,
    fontSize: 16,
    transition: "color 0.18s",
  },
  navLinkSmall: {
    color: "#64748B",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    fontSize: 12,
    transition: "color 0.18s",
  },
  barRow: {
    marginTop: 24,
    borderTop: "0px solid #F1F5F9",
    borderBottom: "2px solid #F1F5F9",
    padding: "16px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 0,
    width: "100%",
  },
  btnGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  btn: {
    border: "1.2px solid #cbdef0",
    background: "#fff",
    color: "#334155",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 200,
    fontSize: 12,
    borderRadius: 9,
    padding: "6px 14px",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s, border 0.2s",
    outline: "none",
  },
  btnActive: {
    background: "#f72585",
    color: "#fff",
    border: "1px solid #ff0090",
    fontWeight: 600,
    fontFamily: "'Figtree', sans-serif",
    fontSize: 13,
  },
  btnGynActive: {
    background: "#f72585",
    color: "#fff",
    border: "1px solid #ff0090",
    fontWeight: 600,
    fontFamily: "'Figtree', sans-serif",
    fontSize: 15,
  },
  searchBox: {
    position: "relative",
    width: "240px",
    maxWidth: "240px",
    minWidth: "140px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    border: "1px solid #cbdef0",
    borderRadius: 9,
    padding: "0 10px",
    height: 34,
    marginLeft: "auto",
  },
  searchInput: {
    border: "none",
    outline: "none",
    fontSize: 12,
    fontFamily: "'Poppins', sans-serif",
    background: "transparent",
    width: "100%",
    padding: "7px 0",
    color: "#64748B",
  },
  searchIcon: {
    color: "#b9d9f4",
    fontSize: 13,
    marginLeft: 4,
    background: "none",
    border: "none",
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  suggestions: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 38,
    background: "#fff",
    border: "1px solid #e0e7ef",
    borderTop: "none",
    borderRadius: "0 0 12px 12px",
    zIndex: 10,
    boxShadow: "0 2px 8px rgba(30,41,59,0.07)",
    maxHeight: 180,
    overflowY: "auto",
  },
  suggestionItem: {
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: 14,
    color: "#b9d9f4",
    background: "#fff",
    borderBottom: "1px solid #f1f5f9",
    transition: "background 0.15s",
    fontFamily: "'Poppins', sans-serif",
  },
  suggestionItemActive: {
    background: "#f1f5f9",
  },
};

export default function Bar({
  initialSlug = "all",
  onSelect = () => {},
  onSearchSelect = () => {},
}) {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const inputRef = useRef();
  const isMobile = useResponsive();
  const navigate = useNavigate();
  const location = useLocation();

  const filteredItems = items.filter(
    (item) => search.length >= 2 && item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Initialize active button correctly
  useEffect(() => {
    if (mainSlugs.includes(initialSlug)) {
      setActive(initialSlug);
    } else if (othersSlugs.includes(initialSlug)) {
      setActive("others");
    } else if (initialSlug === "all") {
      setActive("all");
    }
  }, [initialSlug]);

  // UPDATED: When "others" is clicked, call onSelect with all othersSlugs
  const handleBtnClick = (val) => {
    setActive(val);
    setSearch("");
    setShowSuggestions(false);
    setHighlighted(-1);
    if (val === "others") {
      onSelect(othersSlugs);
    } else {
      onSelect(val);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setShowSuggestions(true);
    setHighlighted(-1);
  };

  const handleSuggestionClick = (item) => {
    setSearch(item.title);
    setShowSuggestions(false);

    // Set to "others" if not in mainSlugs
    if (othersSlugs.includes(item.slug)) {
      setActive("others");
    } else {
      setActive(item.slug);
    }

    onSearchSelect(item.slug);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredItems.length === 0) return;
    if (e.key === "ArrowDown") {
      setHighlighted((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      setHighlighted((prev) =>
        prev <= 0 ? filteredItems.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" && highlighted >= 0) {
      handleSuggestionClick(filteredItems[highlighted]);
    }
  };

  // Navigation handlers for breadcrumb
  const handleNav = (target) => {
    if (target === "home") navigate("/");
    else if (target === "doctors") navigate("/doctors");
    else if (target === "details") {
      if (!location.pathname.startsWith("/specialitiesdetails")) {
        navigate("/specialitiesdetails/gyn");
      }
    }
  };

  // Filter buttons for mobile: only All, Gynecology, Cardiology, Others
  const mobileButtonValues = ["all", "gyn", "cardio", "others"];
  const visibleButtons = isMobile
    ? buttonGroups.filter((btn) => mobileButtonValues.includes(btn.value))
    : buttonGroups;

  return (
    <div style={styles.wrapper}>
      <div className="bar-responsive-container" style={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav style={styles.nav}>
          <ol style={styles.navList}>
            <li
              style={styles.navLink}
              onClick={() => handleNav("home")}
              tabIndex={0}
              onKeyDown={e => { if (e.key === "Enter") handleNav("home"); }}
              role="button"
            >
              Home
            </li>
            <li style={styles.navLinkSmall}>/</li>
            <li
              style={styles.navLink}
              onClick={() => handleNav("doctors")}
              tabIndex={0}
              onKeyDown={e => { if (e.key === "Enter") handleNav("doctors"); }}
              role="button"
            >
              Doctors
            </li>
            <li style={styles.navLinkSmall}>/</li>
            <li
              style={styles.navLink}
              onClick={() => handleNav("details")}
              tabIndex={0}
              onKeyDown={e => { if (e.key === "Enter") handleNav("details"); }}
              role="button"
            >
              Details
            </li>
          </ol>
        </nav>

        {/* Button Bar and Search */}
        <div className="bar-responsive-row" style={{
          ...styles.barRow,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "stretch" : "center",
          gap: isMobile ? "10px" : "0",
        }}>
          <div className="bar-responsive-btn-group" style={{
            ...styles.btnGroup,
            width: isMobile ? "100%" : "auto",
            gap: isMobile ? "7px" : "10px",
          }}>
            {visibleButtons.map((btn) => {
              const isActive =
                btn.value === "all"
                  ? active === "all"
                  : btn.value === "others"
                  ? active === "others"
                  : active === btn.value;

              return (
                <button
                  key={btn.value}
                  className="bar-responsive-btn"
                  style={{
                    ...styles.btn,
                    minWidth: isMobile ? 70 : 90,
                    fontSize: isMobile ? 12 : 13,
                    padding: isMobile ? "6px 10px" : "6px 14px",
                    ...(isActive
                      ? btn.value === "gyn"
                        ? styles.btnGynActive
                        : styles.btnActive
                      : {}),
                  }}
                  onClick={() => handleBtnClick(btn.value)}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          <form
            className="bar-responsive-search-box"
            style={{
              ...styles.searchBox,
              width: isMobile ? "100%" : 240,
              maxWidth: isMobile ? "100%" : 240,
              marginTop: isMobile ? 0 : undefined,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              if (
                filteredItems.length === 1 &&
                search.toLowerCase() === filteredItems[0].title.toLowerCase()
              ) {
                handleSuggestionClick(filteredItems[0]);
              }
            }}
          >
            <input
              className="bar-responsive-search-input"
              style={{
                ...styles.searchInput,
                fontSize: isMobile ? 12 : 13,
                padding: "7px 0",
              }}
              ref={inputRef}
              type="text"
              placeholder="Search Doctors"
              value={search}
              onChange={handleSearch}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
            <button type="submit" style={styles.searchIcon}>
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                <circle cx="9" cy="9" r="7" stroke="#64748B" strokeWidth="2" />
                <path d="M15 15L18 18" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {showSuggestions && filteredItems.length > 0 && (
              <div style={styles.suggestions}>
                {filteredItems.map((item, idx) => (
                  <div
                    key={item.slug}
                    style={{
                      ...styles.suggestionItem,
                      ...(highlighted === idx ? styles.suggestionItemActive : {}),
                    }}
                    onMouseDown={() => handleSuggestionClick(item)}
                    onMouseEnter={() => setHighlighted(idx)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
      {/* Responsive styles for mobile only */}
      <style>
        {`
          @media (max-width: 700px) {
            .bar-responsive-container {
              padding: 40px 8px 0 8px !important;
              margin-left: 0 !important;
              max-width: 100vw !important;
              box-sizing: border-box;
                      margin-top: 10px !important; /* <-- Added top margin */
            }
            .bar-responsive-row {
              flex-direction: column !important;
              gap: 10px !important;
              align-items: stretch !important;
              padding: 10px 0 !important;
            }
            .bar-responsive-btn-group {
              width: 100% !important;
              gap: 7px !important;
              flex-wrap: wrap !important;
              justify-content: flex-start !important;
            }
            .bar-responsive-btn {
              min-width: 70px !important;
              font-size: 12px !important;
              padding: 6px 10px !important;
            }
            .bar-responsive-search-box {
              width: 100% !important;
              max-width: 100% !important;
              margin-top: 0 !important;
              min-width: 120px !important;
              height: 34px !important;
              padding: 0 8px !important;
            }
            .bar-responsive-search-input {
              font-size: 12px !important;
              padding: 7px 0 !important;
            }
          }
        `}
      </style>
    </div>
  );
}
