import React from 'react'
import Sidebar from './Sidebar';
import data from '../data';
import Table from '../components/Table';

function Stock() {
  return (
    <div className="side-chart-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <Table data={data} /> 
    </div>
  )
}

export default Stock