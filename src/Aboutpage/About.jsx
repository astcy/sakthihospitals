import React from "react";
import Header from "../Header";
import Welcome from "./Welcome";
import Vision from "./Vision";
import Virtual from "./Virtual";
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
const About = () => {
    return(
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
<Welcome/>
<Vision/>
<Virtual/>


      <Footer/>
    </section>
    );
};

export default About;