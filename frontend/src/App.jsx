// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveNotes from './components/LoveNotes';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/lovenotes" element={<LoveNotes />} />
      </Routes>
    </Router>
  );
}

export default App;

