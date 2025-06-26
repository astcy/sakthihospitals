import React from "react";
import Header from "../Header";
import Sakthi from "./Sakthi";
import Journey from "./Journey";
import Meet from "./meet";
import Emergency from "./Emergency";
const Home = () => {
  return (
    <section
      style={{
        overflowX: "hidden",
        width: "100%",
        position: "relative",
        margin: 0,
        padding: 0,
        background: "#ffffff",
      }}
    >
      {/* Global Styles */}
      <style>{`
        /* Reset and global box model */
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

        /* Hide scrollbar in Chrome, Safari, Edge */
        ::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar in Firefox */
        html {
          scrollbar-width: none;
        }

        /* Hide scrollbar in IE/Edge */
        body {
          -ms-overflow-style: none;
        }
      `}</style>

      {/* Page Components */}
      <Header />
      <Sakthi />
      <Journey />
      < Meet/>
            < Emergency/>

    </section>
  );
};

export default Home;
