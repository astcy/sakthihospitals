import React, { useState } from "react";
import Header1 from "../Header1";
import Blogbar from "./Blogbar";
import Blogitem from "./Blogitem";
import Footer from "../Footer";

const globalStyle = `
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    background: #ffffff;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    scrollbar-width: none;
  }

  body {
    -ms-overflow-style: none;
  }
`;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // ✅ Track grid/list toggle

  return (
    <section
      style={{
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        position: "relative",
        margin: 0,
        padding: 0,
        background: "#ffffff",
      }}
    >
      <style>{globalStyle}</style>

      {/* Page Sections */}
      <Header1 />
      <Blogbar onSelect={setSelectedCategory} onViewChange={setViewMode} /> {/* ✅ Pass onViewChange */}
      <Blogitem selectedCategory={selectedCategory} viewMode={viewMode} /> {/* ✅ Pass viewMode */}
      <Footer />
    </section>
  );
};

export default Blog;
