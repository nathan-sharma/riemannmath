import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Register from './Register.jsx';
import Info from './Info.jsx';
import Resources from './Resources.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/registration" element={<Register />} />
        <Route path="/about" element={<Info />} />
        <Route path = "/resources" element = {<Resources />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
