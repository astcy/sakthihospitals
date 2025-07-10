import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

// Sample data
const blogItems = [
  {
    id: 1,
    title: "Managing Chronic Pain: Treatment Options and Strategies",
    author: "Debbi Blanco",
    date: "March 8",
    category: "emergency",
  },
  {
    id: 2,
    title: "Understanding and Managing Diabetes: Tips for Healthy Living",
    author: "Andrew Smith",
    date: "March 5",
    category: "pediatric",
  },
  {
    id: 3,
    title: "The Role of Physical Therapy in Injury Recovery and Prevention",
    author: "Isabelle Norman",
    date: "March 2",
    category: "cardiology",
  },
  {
    id: 4,
    title: "Breaking the Stigma: Raising Awareness for Mental Health Issues",
    author: "Michael Johnson",
    date: "Feb 28",
    category: "psychiatry",
  },
  {
    id: 5,
    title: "Allergies and Asthma: Causes, Symptoms, and Treatment Options",
    author: "Nathalie Poetry",
    date: "Feb 26",
    category: "others",
  },
  {
    id: 6,
    title: "Caring for Your Skin: Tips for Healthy, Glowing Skin",
    author: "Isabelle Norman",
    date: "Feb 25",
    category: "others",
  },
  {
    id: 7,
    title: "Child Growth & Nutrition: Key Pediatric Insights",
    author: "Dr. Lisa Berry",
    date: "Feb 20",
    category: "pediatric",
  },
  {
    id: 8,
    title: "Emergency Room Protocols You Should Know",
    author: "Dr. Harry Lynn",
    date: "Feb 18",
    category: "emergency",
  },
  {
    id: 9,
    title: "Cardiac Rehab Benefits for Heart Patients",
    author: "Dr. Harsha Patel",
    date: "Feb 15",
    category: "cardiology",
  },
  {
    id: 10,
    title: "Understanding Depression in Youth",
    author: "Dr. Nancy Flint",
    date: "Feb 14",
    category: "psychiatry",
  },
];

const Blogitem = ({ selectedCategory = "all", viewMode = "grid" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredItems =
    selectedCategory === "all"
      ? blogItems
      : blogItems.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIdx, startIdx + itemsPerPage);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 16px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns:
      viewMode === "grid" ? "repeat(auto-fill, minmax(300px, 1fr))" : "1fr",
    gap: "24px",
  };

  const cardStyle = {
    borderRadius: "12px",
    border: "1px solid #e0f2fe",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.04)",
    display: "flex",
    flexDirection: viewMode === "grid" ? "column" : "row",
    gap: "16px",
    alignItems: viewMode === "grid" ? "stretch" : "center",
  };

  const imagePlaceholderStyle = {
    flexShrink: 0,
    width: viewMode === "grid" ? "100%" : "180px",
    height: "160px",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const metaStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "8px",
    fontFamily: "Poppins, sans-serif",
  };

  const iconStyle = {
    display: "flex",
    gap: "8px",
    color: "#3b82f6",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: "8px",
    fontFamily: "Figtree, sans-serif",
  };

  const authorStyle = {
    fontSize: "13px",
    color: "#6b7280",
    fontFamily: "Poppins, sans-serif",
  };

  const paginationStyle = {
    display: totalPages <= 1 ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    gap: "8px",
    flexWrap: "wrap",
  };

  const pageButtonStyle = (active = false) => ({
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    backgroundColor: active ? "#2563eb" : "#fff",
    color: active ? "#fff" : "#4b5563",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  });

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {currentItems.map((item) => (
          <div key={item.id} style={cardStyle}>
            <div style={imagePlaceholderStyle}></div>
            <div style={contentStyle}>
              <div style={metaStyle}>
                <span>{item.date}</span>
                <div style={iconStyle}>
                  <FontAwesomeIcon icon={faEye} />
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faShareAlt} />
                </div>
              </div>
              <div style={titleStyle}>{item.title}</div>
              <div style={authorStyle}>{item.author}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={paginationStyle}>
        <button
          style={pageButtonStyle()}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            style={pageButtonStyle(currentPage === i + 1)}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          style={pageButtonStyle()}
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Blogitem;
