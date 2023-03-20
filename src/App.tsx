import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import './App.css';

const Home: React.FC = () => {
  return <h1>Home</h1>;
};

const About: React.FC = () => {
  return <h1>About</h1>;
};

const Contact: React.FC = () => {
  return <h1>Contact</h1>;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
