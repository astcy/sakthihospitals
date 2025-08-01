import React, { useState } from "react";
import Header from "../Header";
import Common from "../Common";
import ContactForm from "./Contactform";
import Map from "./Map";
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

const Contact = () => {
  // Default facility slug must match a key in your facilities object in Facitem.jsx
  
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

      {/* Page Components */}
      <Header />
      <Common/>
      <ContactForm/>
     <Map/>
      <Footer />
    </section>
  );
};

export default Contact;
