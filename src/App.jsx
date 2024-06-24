import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'boxicons';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Stock from './pages/Stock';
import BarChart from './components/BarChart';
import Form from './components/Form'

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/barchart" element={<BarChart />} />
            <Route path="/form" element={<Form/>} />
            {/* Ajouter une route pour Setting si nécessaire */}
            <Route path="/setting" element={<div>Setting Page</div>} />
          </Routes>
        
    </BrowserRouter>
  );
}

export default App;
