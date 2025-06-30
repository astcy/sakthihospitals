// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Homepage/Home";
import About from "./Aboutpage/About";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        {/* Add more routes if needed */}
      </Routes>
    </HashRouter>
  );
};

export default App;
