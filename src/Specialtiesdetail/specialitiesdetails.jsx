import React from "react";
import { useParams } from "react-router-dom";
import Header1 from "../Header1";
import Bar from "../Bar";
import Appointment1 from "./Appointment1";
import Only from "./Only";
import Only1 from "./Only1";
import Footer1 from "../Footer1";
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

const Specialitiesdetails = () => {
  const { slug } = useParams(); // ✅ Get slug from route

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
      {/* Inject Global Styles */}
      <style>{globalStyle}</style>

      {/* Page Components */}
      <Header1 />
      <Bar initialSlug={slug} /> {/* ✅ Corrected prop name */}
<Appointment1/>
<Only1/>
      <Only/>
      <Footer1 />
    </section>
  );
};

export default Specialitiesdetails;
