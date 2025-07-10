import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";

const Blogbar = ({ onSelect, onViewChange }) => {
  const [active, setActive] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    "All",
    "Emergency",
    "Pediatric",
    "Cardiology",
    "Psychiatry",
    "Others",
  ];

  const containerStyle = {
    maxWidth: "1200px",
    margin: "40px auto 0",
    padding: "24px 16px",
    backgroundColor: "#fff",
  };

  const breadcrumbStyle = {
    fontSize: "12px",
    color: "#2563eb",
    fontFamily: "Arial, sans-serif",
    marginBottom: "4px",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: 800,
    color: "#1e3a8a",
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

  const buttonStyle = (label) => ({
    fontSize: "12px",
    fontWeight: 600,
    borderRadius: "999px",
    padding: "4px 16px",
    border: label === active ? "none" : "1px solid #93c5fd",
    backgroundColor: label === active ? "#2563eb" : "#fff",
    color: label === active ? "#fff" : "#2563eb",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.2s ease",
  });

  const infoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "12px",
    color: "#60a5fa",
    fontWeight: 600,
    fontFamily: "Arial, sans-serif",
  };

  const iconButtonStyle = (mode) => ({
    background: "none",
    border: "none",
    color: viewMode === mode ? "#2563eb" : "#60a5fa",
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
      <div style={breadcrumbStyle}>Home / Blog / Read</div>
      <h1 style={titleStyle}>Psychology and Life Style</h1>

      <div style={barStyle}>
        <div style={buttonGroupStyle}>
          {categories.map((label) => (
            <button
              key={label}
              style={buttonStyle(label)}
              onClick={() => handleCategoryClick(label)}
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
