import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";

const Blogbar = ({ onSelect, onViewChange }) => {
  const [active, setActive] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const categories = [
    "All",
    "Emergency",
    "Pediatric",
    "Cardiology",
    "Psychiatry",
    "Others",
  ];

  const containerStyle = {
    maxWidth: "1140px",
    margin: "80px auto 0",
    padding: "24px 16px",
    backgroundColor: "#fff",
  };

  const breadcrumbStyle = {
    fontSize: "12px",
    color: "#aebac3",
    fontFamily: "Poppins, sans-serif",
    marginBottom: "4px",
    display: "flex",
    gap: "4px",
    flexWrap: "wrap",
  };

  const breadcrumbLink = {
    color: "#aebac3",
    cursor: "pointer",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: 800,
    color: "#274760",
    marginBottom: "16px",
    fontFamily: "Figtree, sans-serif",
  };

  const barStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    borderBottom: "1px solid #e0f2fe",
    flexWrap: "wrap",
    gap: "12px",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  };

  const buttonStyle = (label) => {
    const isActive = label === active;
    const isHovered = label === hovered;

    const isColored = isActive || isHovered;

    return {
      fontSize: "12px",
      fontWeight: 300,
      borderRadius: "999px",
      padding: "4px 16px",
      border: isColored ? "none" : "1px solid #498bcb",
      backgroundColor: isColored ? "#307bc4" : "#fff",
      color: isColored ? "#fff" : "#8598a5",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.2s ease",
    };
  };

  const infoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "12px",
    color: "#c9d1d7",
    fontWeight: 600,
    fontFamily: "Arial, sans-serif",
  };

  const iconButtonStyle = (mode) => ({
    background: "none",
    border: "none",
    color: viewMode === mode ? "#aebac3" : "#307bc4",
    cursor: "pointer",
    fontSize: "16px",
  });

  const handleCategoryClick = (label) => {
    setActive(label);
    if (onSelect) onSelect(label.toLowerCase());
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
    if (onViewChange) onViewChange(mode);
  };

  return (
    <div style={containerStyle}>
      <div style={breadcrumbStyle}>
        <span style={breadcrumbLink} onClick={() => navigate("/")}>Home</span>
        <span>/</span>
        <span style={breadcrumbLink} onClick={() => navigate("/blogs")}>Blog</span>
        <span>/</span>
        <span style={breadcrumbLink} onClick={() => navigate("/blogdetails")}>Read</span>
      </div>

      <h1 style={titleStyle}>Psychology and Life Style</h1>

      <div style={barStyle}>
        <div style={buttonGroupStyle}>
          {categories.map((label) => (
            <button
              key={label}
              style={buttonStyle(label)}
              onClick={() => handleCategoryClick(label)}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
            >
              {label}
            </button>
          ))}
        </div>

        <div style={infoStyle}>
          <span>Showing 9 items</span>
          <button
            style={iconButtonStyle("grid")}
            onClick={() => handleViewChange("grid")}
            aria-label="Grid view"
          >
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button
            style={iconButtonStyle("list")}
            onClick={() => handleViewChange("list")}
            aria-label="List view"
          >
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogbar;
