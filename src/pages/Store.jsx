import React from 'react'
import Sidebar from './Sidebar';
import SmallCard from '../components/Card';
function Store() {
  return (
    <div className="side-chart-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className='card-container'>
      <SmallCard
        title="Riz"
        number='2'
      />
      </div>
    </div>
  )
}

export default Store