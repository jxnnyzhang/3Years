// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MemoryLane from './components/MemoryLane';
import VideoPage from './components/VideoPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/memory-lane" element={<MemoryLane />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
