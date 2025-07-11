import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";

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

const blogItems = [
  { id: 1, title: "Managing Chronic Pain: Treatment Options and Strategies", author: "Debbi Blanco", date: "March 8", category: "emergency", image: img1 },
  { id: 2, title: "Understanding and Managing Diabetes: Tips for Healthy Living", author: "Andrew Smith", date: "March 5", category: "pediatric", image: img2 },
  { id: 3, title: "The Role of Physical Therapy in Injury Recovery and Prevention", author: "Isabelle Norman", date: "March 2", category: "cardiology", image: img3 },
  { id: 4, title: "Breaking the Stigma: Raising Awareness for Mental Health Issues", author: "Michael Johnson", date: "Feb 28", category: "psychiatry", image: img4 },
  { id: 5, title: "Allergies and Asthma: Causes, Symptoms, and Treatment Options", author: "Nathalie Poetry", date: "Feb 26", category: "others", image: img5 },
  { id: 6, title: "Caring for Your Skin: Tips for Healthy, Glowing Skin", author: "Isabelle Norman", date: "Feb 25", category: "others", image: img6 },
  { id: 7, title: "Child Growth & Nutrition: Key Pediatric Insights", author: "Dr. Lisa Berry", date: "Feb 20", category: "pediatric", image: img7 },
  { id: 8, title: "Emergency Room Protocols You Should Know", author: "Dr. Harry Lynn", date: "Feb 18", category: "emergency", image: img8 },
  { id: 9, title: "Cardiac Rehab Benefits for Heart Patients", author: "Dr. Harsha Patel", date: "Feb 15", category: "cardiology", image: img9 },
  { id: 10, title: "Understanding Depression in Youth", author: "Dr. Nancy Flint", date: "Feb 14", category: "psychiatry", image: img10 },
];

const Blogread = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id);
  const blog = blogItems.find((b) => b.id === blogId);

  const prevBlogs = blogItems.filter((b) => b.id < blogId).slice(-2).reverse();
  const nextBlogs = blogItems.filter((b) => b.id > blogId).slice(0, 2);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 16px" }}>
      {/* Heading */}
      <h1 style={{
        fontSize: "32px",
        fontWeight: "800",
        fontFamily: "Figtree, sans-serif",
        color: "#2a4560",
        marginBottom: "20px",
      }}>
        {blog.title}
      </h1>

      {/* Meta */}
      <div style={{
        display: "flex",
        gap: "20px",
        fontSize: "14px",
        color: "#6b7280",
        fontFamily: "Poppins, sans-serif",
        marginBottom: "20px"
      }}>
        <span><FontAwesomeIcon icon={faUser} /> {blog.author}</span>
        <span><FontAwesomeIcon icon={faCalendar} /> {blog.date}</span>
      </div>

      {/* Image */}
      <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "20px" }}>
        <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
      </div>

      {/* Dummy Content */}
      <p style={{ fontSize: "16px", lineHeight: "1.8", fontFamily: "Poppins, sans-serif", color: "#444" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ex ut magna varius ultrices. Etiam dignissim, nunc non hendrerit tristique,
        purus massa porta metus, ac porta tortor diam ut lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras volutpat eu risus at suscipit. Morbi in pretium leo. Nullam ac metus at tortor ullamcorper lacinia. Duis nec tellus sem. 
        Pellentesque sit amet sem magna. Integer sollicitudin convallis nulla vel rhoncus.
      </p>

      {/* Related Blogs Slider */}
      <h2 style={{
        fontSize: "24px",
        fontWeight: 700,
        margin: "40px 0 16px",
        color: "#2a4560",
        fontFamily: "Figtree, sans-serif"
      }}>
        Related Posts
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}>
        {[...prevBlogs, ...nextBlogs].map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/blogdetails/${item.id}`)}
            style={{
              cursor: "pointer",
              border: "1px solid #e0f2fe",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
              transition: "transform 0.2s",
            }}
          >
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
            <div style={{ padding: "12px" }}>
              <h3 style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "8px",
                color: "#1f2937",
                fontFamily: "Figtree, sans-serif"
              }}>
                {item.title.length > 60 ? item.title.slice(0, 60) + "..." : item.title}
              </h3>
              <p style={{ fontSize: "12px", color: "#6b7280", fontFamily: "Poppins, sans-serif" }}>
                {item.date} • {item.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogread;
