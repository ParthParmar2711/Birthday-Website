// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import LoveNotes from "./components/LoveNotes";
import About from "./components/About";
import PDFManager from "./components/PDFManager";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pdf-manager" element={<PDFManager />} />
        <Route path="/lovenotes" element={<LoveNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
