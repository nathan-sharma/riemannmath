import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Register from './Register.jsx';
import Info from './Info.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/registration" element={<Register />} />
        <Route path="/info-and-about" element={<Info />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
