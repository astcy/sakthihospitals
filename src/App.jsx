// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Homepage/Home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes if needed */}
      </Routes>
    </HashRouter>
  );
};

export default App;
