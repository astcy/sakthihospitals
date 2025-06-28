import React, { useState } from "react";
import img1 from "../assets/post1.png";
import img2 from "../assets/post2.png";
import img3 from "../assets/post3.png";

const posts = [
  {
    date: "June 23, 2024",
    title: `Protecting Women's Health:\nThe Vital Role of HPV\nVaccination`,
    image: img3,
    link: "#",
  },
  {
    date: "June 26, 2024",
    title: `The Power of Awareness:\nManaging Period Pain\nEffectively`,
    image: img2,
    link: "#",
  },
  {
    date: "June 29, 2024",
    title: "Our Free Woman Awareness Camp in Chennai",
    image: img1,
    link: "#",
  },
];

const Post = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const outerStyle = {
    width: "100%",
    maxWidth: "1400px",
    padding: "4rem 2rem",
    margin: "0 auto",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  };

  const headingWrapper = {
    textAlign: "center",
    marginBottom: "2.5rem",
  };

  const tagStyle = {
    color: "#2a6db0",
    fontWeight: "600",
    fontSize: "14px",
    letterSpacing: "1px",
    marginBottom: "8px",
  };

  const titleStyle = {
    fontSize: "2.3rem",
    fontWeight: 800,
    color: "#22334d",
    margin: 0,
    fontFamily: "'Figtree', sans-serif",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
    flex: "1 1 320px",
    minWidth: "260px",
    maxWidth: "350px",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    objectPosition: "center top",
    background: "#f2f2f2",
  };

  const contentStyle = {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  const metaRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const dateStyle = {
    color: "#7a7a7a",
    fontSize: "0.95rem",
    fontWeight: 500,
  };

  const iconRowStyle = {
    display: "flex",
    gap: "8px",
  };

  const iconCircleStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#eef2f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    width: "12px",
    height: "12px",
    objectFit: "contain",
    cursor: "pointer",
  };

  const postTitleStyle = {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: "700",
    fontSize: "1.1rem",
    color: "#1a2b3c",
    lineHeight: 1.4,
    whiteSpace: "pre-line",
    marginBottom: "1rem",
  };

  const descStyle = {
    color: "#333",
    fontSize: "1rem",
    marginBottom: "1.2rem",
  };

  const linkStyle = {
    color: "#c9d1d7",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    marginTop: "auto",
  };

  return (
    <section style={outerStyle}>
      <div style={headingWrapper}>
        <p style={tagStyle}>BLOG POSTS</p>
        <h2 style={titleStyle}>Latest Update</h2>
      </div>

      <div style={containerStyle}>
        {posts.map((post, idx) => (
          <div
            key={idx}
            style={{
              ...cardStyle,
              transform:
                hoveredIdx === idx ? "translateY(-16px) scale(1.01)" : "none",
              boxShadow:
                hoveredIdx === idx
                  ? "0 12px 36px rgba(26,126,251,0.12)"
                  : cardStyle.boxShadow,
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <img src={post.image} alt={post.title} style={imageStyle} />
            <div style={contentStyle}>
              <div style={metaRow}>
                <div style={dateStyle}>{post.date}</div>
                <div style={iconRowStyle}>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <div style={iconCircleStyle}>
                      <img
                        src="https://www.facebook.com/favicon.ico"
                        alt="facebook"
                        style={iconStyle}
                      />
                    </div>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <div style={iconCircleStyle}>
                      <img
                        src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
                        alt="twitter"
                        style={iconStyle}
                      />
                    </div>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <div style={iconCircleStyle}>
                      <img
                        src="https://www.linkedin.com/favicon.ico"
                        alt="linkedin"
                        style={iconStyle}
                      />
                    </div>
                  </a>
                </div>
              </div>

              <div style={postTitleStyle}>{post.title}</div>
              <div style={descStyle}>
                {/* Optional description */}
              </div>
              <a href={post.link} style={linkStyle}>
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
