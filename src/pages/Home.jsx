import React from 'react';
import Sidebar from './Sidebar';
import ProductForm from '../components/Form';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="side-chart-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="form-container">
        <ProductForm />
      </div>
      </div>

  );
}
