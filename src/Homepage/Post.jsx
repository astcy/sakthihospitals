import React from "react";
import SectionWrapper from "../components/SectionWrapper";

const posts = [
  {
    date: "June 23, 2024",
    title: "Protecting Women's Health: The Vital Role of HPV Vaccination",
    image: "https://pplx-res.cloudinary.com/image/private/user_uploads/62046104/c5dc6fef-877a-4e3b-b75d-9f101b32d348/Screenshot-2025-06-24-134734.jpg", // Use cropped or relevant image URL
    description: "IMPORTANCE OF AWARENESS\nHPV VACCINATION FOR WOMEN",
    link: "#",
  },
  {
    date: "June 26, 2024",
    title: "The Power of Awareness: Managing Period Pain Effectively",
    image: "https://pplx-res.cloudinary.com/image/private/user_uploads/62046104/c5dc6fef-877a-4e3b-b75d-9f101b32d348/Screenshot-2025-06-24-134734.jpg",
    description: "IMPORTANCE OF AWARENESS\nREMEDIES DURING PERIOD PAIN FOR WOMEN",
    link: "#",
  },
  {
    date: "June 29, 2024",
    title: "Our Free Woman Awareness Camp in Chennai",
    image: "https://pplx-res.cloudinary.com/image/private/user_uploads/62046104/c5dc6fef-877a-4e3b-b75d-9f101b32d348/Screenshot-2025-06-24-134734.jpg",
    description: "FREE GYNAECOLOGIST CONSULTATION\nWomen who are having the following complaints:\n• Delayed Puberty\n• Irregular & Painful Periods\n• Heavy Bleeding\n• PCOS, PCOD\n• Urinary Infection.",
    link: "#",
  },
];

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
  overflow: "hidden",
  transition: "transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s",
  cursor: "pointer",
  margin: "1rem 0.5rem",
  flex: "1 1 320px",
  minWidth: "280px",
  maxWidth: "370px",
  display: "flex",
  flexDirection: "column",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  background: "#f2f2f2",
};

const contentStyle = {
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const dateStyle = {
  color: "#7a7a7a",
  fontSize: "0.95rem",
  marginBottom: "0.5rem",
};

const titleStyle = {
  fontWeight: "700",
  fontSize: "1.18rem",
  marginBottom: "0.6rem",
  color: "#1a2b3c",
  lineHeight: 1.3,
};

const descStyle = {
  color: "#333",
  fontSize: "1.01rem",
  whiteSpace: "pre-line",
  marginBottom: "1.2rem",
};

const linkStyle = {
  color: "#1a7efb",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1rem",
  marginTop: "auto",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.5rem",
};

const Post = () => {
  // Inline CSS for hover effect
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  return (
    <SectionWrapper maxWidth="1200px" padding="2.5rem 1rem" center>
      <h2 style={{
        textAlign: "center",
        fontSize: "2.3rem",
        fontWeight: 800,
        marginBottom: "2.5rem",
        color: "#22334d"
      }}>
        Latest Update
      </h2>
      <div style={containerStyle}>
        {posts.map((post, idx) => (
          <div
            key={idx}
            style={{
              ...cardStyle,
              transform: hoveredIdx === idx ? "translateY(-16px)" : "none",
              boxShadow: hoveredIdx === idx ? "0 8px 32px rgba(26,126,251,0.10)" : cardStyle.boxShadow,
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <img src={post.image} alt={post.title} style={imageStyle} />
            <div style={contentStyle}>
              <div style={dateStyle}>{post.date}</div>
              <div style={titleStyle}>{post.title}</div>
              <div style={descStyle}>{post.description}</div>
              <a href={post.link} style={linkStyle}>Learn more</a>
            </div>
          </div>
        ))}
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .post-card-container {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Post;
