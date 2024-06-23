import React from 'react';
import '../styles/Card.css';

const SmallCard = ({  title, number }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{number}</p>
      </div>
    </div>
  );
};

export default SmallCard;
