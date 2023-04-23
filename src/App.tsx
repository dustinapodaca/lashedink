import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import './App.css';

// import Hero from './Components/Hero';
import ServiceSelector from './Components/ServiceSelector';

import brow1 from './assets/images/brows/brow1.jpg';
import brow2 from './assets/images/brows/brow2.jpg';
import brow3 from './assets/images/brows/brow3.jpg';
import brow4 from './assets/images/brows/brow4.jpg';
import brow5 from './assets/images/brows/brow5.jpg';
import brow6 from './assets/images/brows/brow6.jpg';

import lash1 from './assets/images/lashes/lash1.jpg';
import lash2 from './assets/images/lashes/lash2.jpg';
import lash3 from './assets/images/lashes/lash3.jpg';
import lash4 from './assets/images/lashes/lash4.jpg';
import lash5 from './assets/images/lashes/lash5.jpg';

const browImages = [
  { id: 1, src: brow1 },
  { id: 2, src: brow2 },
  { id: 3, src: brow3 },
  { id: 4, src: brow4 },
  { id: 5, src: brow5 },
  { id: 6, src: brow6 },
];

const lashImages = [
  { id: 1, src: lash1 },
  { id: 2, src: lash2 },
  { id: 3, src: lash3 },
  { id: 4, src: lash4 },
  { id: 5, src: lash5 },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ServiceSelector images={browImages} />
      <ServiceSelector images={lashImages} />
      {/* <Hero /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
