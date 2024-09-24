import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import LandingPage from './LandingPage';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="LandingPage" />} />
          <Route path="/LandingPage/*" element={<LandingPage />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
