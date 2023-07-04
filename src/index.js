import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from './components/Home/Home';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </HashRouter>
);













