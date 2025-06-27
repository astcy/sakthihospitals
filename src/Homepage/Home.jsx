// Home.jsx
import React from "react";
import Header from "../Header";
import Sakthi from "./Sakthi";
import Journey from "./Journey";
import Meet from "./meet";
import Emergency from "./Emergency";

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

const Home = () => {
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
      {/* Global Styles */}
      <style>{globalStyle}</style>

      {/* Page Components */}
      <Header />
      <Sakthi />
      <Journey />
      <Meet />
      <Emergency />
    </section>
  );
};

export default Home;
