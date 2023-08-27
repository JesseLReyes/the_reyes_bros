import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Designers from './components/Designers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <Designers></Designers>
    <App />
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" />
      </Routes>
      <React.StrictMode>
        <Routes>
          <Route path="/about" element={<h1 className="testing">11111</h1>} />
          <Route path="/experience" element={<h1>2222</h1>} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </div>
);
