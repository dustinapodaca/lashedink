import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import './App.css';

import Hero from './Components/Hero';
import Services from './Pages/Services';
import About from './Pages/About';
// import FAQ from './Pages/FAQ';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
