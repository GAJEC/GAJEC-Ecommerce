import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/product/:id" element={<><Navbar /><ProductDetail /></>} />
      </Routes>
    </div>
  );
};

export default App;