// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Homepage/Home";
import About from "./Aboutpage/About";
import Specialties from "./Specialitiespage/Specialities";
import Specialitiesdetails from "./Specialtiesdetail/specialitiesdetails";
import Facilities from "./Facilitiespage/Facilities";
import Contact from "./Contactpage/Contact";
import Blog from "./Blogpage/Blog";
import Blogdetails from "./Blogdetailpage/Blogdetails";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/specialties" element={<Specialties/>}/>
<Route path="/specialitiesdetails/:slug" element={<Specialitiesdetails />} />
<Route path="/facilities" element={<Facilities />} />
        {/* Add more routes if needed */}
        <Route path ="/contact" element={<Contact/>} />
        <Route path ="/blogs" element={<Blog/>} />
        <Route path ="/blogdetails" element={<Blogdetails/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
