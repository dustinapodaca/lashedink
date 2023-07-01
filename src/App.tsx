import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import './App.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
