import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Import your images from the assets folder
import img1 from "../assets/blog1.jpg";
import img2 from "../assets/blog2.jpg";
import img3 from "../assets/blog3.jpg";
import img4 from "../assets/blog4.jpg";
import img5 from "../assets/blog5.jpg";
import img6 from "../assets/blog6.jpg";
import img7 from "../assets/blog7.jpg";
import img8 from "../assets/blog8.jpg";
import img9 from "../assets/blog9.jpg";
import img10 from "../assets/blog10.jpg";

// Sample data with image property
const blogItems = [
  {
    id: 1,
    title: "Managing Chronic Pain: Treatment Options and Strategies",
    author: "Debbi Blanco",
    date: "March 8",
    category: "emergency",
    image: img1,
  },
  {
    id: 2,
    title: "Understanding and Managing Diabetes: Tips for Healthy Living",
    author: "Andrew Smith",
    date: "March 5",
    category: "pediatric",
    image: img2,
  },
  {
    id: 3,
    title: "The Role of Physical Therapy in Injury Recovery and Prevention",
    author: "Isabelle Norman",
    date: "March 2",
    category: "cardiology",
    image: img3,
  },
  {
    id: 4,
    title: "Breaking the Stigma: Raising Awareness for Mental Health Issues",
    author: "Michael Johnson",
    date: "Feb 28",
    category: "psychiatry",
    image: img4,
  },
  {
    id: 5,
    title: "Allergies and Asthma: Causes, Symptoms, and Treatment Options",
    author: "Nathalie Poetry",
    date: "Feb 26",
    category: "others",
    image: img5,
  },
  {
    id: 6,
    title: "Caring for Your Skin: Tips for Healthy, Glowing Skin",
    author: "Isabelle Norman",
    date: "Feb 25",
    category: "others",
    image: img6,
  },
  {
    id: 7,
    title: "Child Growth & Nutrition: Key Pediatric Insights",
    author: "Dr. Lisa Berry",
    date: "Feb 20",
    category: "pediatric",
    image: img7,
  },
  {
    id: 8,
    title: "Emergency Room Protocols You Should Know",
    author: "Dr. Harry Lynn",
    date: "Feb 18",
    category: "emergency",
    image: img8,
  },
  {
    id: 9,
    title: "Cardiac Rehab Benefits for Heart Patients",
    author: "Dr. Harsha Patel",
    date: "Feb 15",
    category: "cardiology",
    image: img9,
  },
  {
    id: 10,
    title: "Understanding Depression in Youth",
    author: "Dr. Nancy Flint",
    date: "Feb 14",
    category: "psychiatry",
    image: img10,
  },
];

const Blogitem = ({ selectedCategory = "all", viewMode = "grid" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemsPerPage = 9;
  const navigate = useNavigate();

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
    maxWidth: "1150px",
    margin: "0 auto",
    padding: "40px 16px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns:
      viewMode === "grid" ? "repeat(auto-fill, minmax(300px, 1fr))" : "1fr",
    gap: "10px",
  };

  const cardStyle = {
    borderRadius: "18px",
    border: "1px solid #e0f2fe",
    padding: "0 0 16px 0",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
    display: "flex",
    flexDirection: viewMode === "grid" ? "column" : "row",
    gap: "16px",
    alignItems: viewMode === "grid" ? "stretch" : "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    transform: "translateY(0)",
  };

  const imageContainerStyle = {
    width: "100%",
    height: "200px",
    borderRadius: "14px 14px 0 0",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
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
    padding: "0 12px",
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
    fontFamily: "Figtree, sans-serif",
    marginBottom: "8px",
    padding: "0 12px",
    maxWidth: "85%",
    wordBreak: "break-word",
    textAlign: "left",
  };

  const authorStyle = {
    fontSize: "13px",
    color: "#6b7280",
    fontFamily: "Poppins, sans-serif",
    padding: "0 12px",
    textAlign: "left",
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
    backgroundColor: active ? "#307bc4" : "#fff",
    color: active ? "#fff" : "#307bc4",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  });

  // Handle card click
  const handleCardClick = (id) => {
    navigate(`/blogdetails/${id}`);
  };

  // Social icon click handlers
  const handleIconClick = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {currentItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(item.id)}
              style={{
                ...cardStyle,
                boxShadow: isHovered
                  ? "0 12px 24px rgba(0, 0, 0, 0.12)"
                  : cardStyle.boxShadow,
                transform: isHovered ? "translateY(-6px)" : "translateY(0)",
              }}
            >
              <div style={imageContainerStyle}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={imageStyle}
                />
              </div>
              <div style={contentStyle}>
                <div style={metaStyle}>
                  <span>{item.date}</span>
                  <div style={iconStyle}>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={(e) =>
                        handleIconClick(
                          e,
                          "https://www.facebook.com/sakthihospitals/"
                        )
                      }
                      title="Facebook"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={(e) =>
                        handleIconClick(
                          e,
                          "https://www.instagram.com/sakthihospitals/"
                        )
                      }
                      title="Instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={(e) =>
                        handleIconClick(
                          e,
                          "https://twitter.com/sakthihospital"
                        )
                      }
                      title="Twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </div>
                </div>
                <div style={titleStyle}>{item.title}</div>
                <div style={authorStyle}>{item.author}</div>
              </div>
            </div>
          );
        })}
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
