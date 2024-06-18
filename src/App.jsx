import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'boxicons';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Store from './pages/Store';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Pour définir le chemin vers Signup */}
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App
