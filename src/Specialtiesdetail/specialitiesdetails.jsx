import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header1 from "../Header1";
import Bar from "../Bar";
import Itemdetail from "./Itemdetail";
import Treat from "./Treat";
import Appointment1 from "./Appointment1";
import Only from "./Only";
import Only1 from "./Only1";
import Footer1 from "../Footer1";

const globalStyle = `
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    background: #ffffff;
  }
  ::-webkit-scrollbar { display: none; }
  html { scrollbar-width: none; }
  body { -ms-overflow-style: none; }
`;

const Specialitiesdetails = () => {
  const { slug: initialSlug } = useParams();
  const [slug, setSlug] = useState(initialSlug);

  useEffect(() => {
    setSlug(initialSlug);
  }, [initialSlug]);

  return (
    <section
      style={{
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        background: "#ffffff",
      }}
    >
      <style>{globalStyle}</style>

      <Header1 />
      <Bar
        initialSlug={initialSlug}
        onSelect={(val) => setSlug(val)}
        onSearchSelect={(val) => setSlug(val)}
      />
      <Itemdetail slug={slug} />
      <Treat/>
      <Appointment1 />
      <Only1 />
      <Only />
      <Footer1 />
    </section>
  );
};

export default Specialitiesdetails;
