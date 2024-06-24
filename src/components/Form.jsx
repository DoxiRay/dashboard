import React, { useState } from 'react';
import '../styles/Form.css';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productNumber, setProductNumber] = useState('');
  const [productDate, setProductDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = { id: productId, name: productName, price: productPrice, number: productNumber, date: productDate };

    await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    setProductName('');
    setProductId('');
    setProductPrice('');
    setProductNumber('');
    setProductDate('');
    navigate('/products');
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <h2 className='title-product'>Insert new product</h2>

      <label htmlFor="productName">Name of the product:</label>
      <input
        type="text"
        id="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <label htmlFor="productId">ID product:</label>
      <input
        type="text"
        id="productId"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <label htmlFor="productNumber">Product Number:</label>
      <input
        type="number"
        id="productNumber"
        value={productNumber}
        onChange={(e) => setProductNumber(e.target.value)}
      />
      <label htmlFor="productPrice">Price:</label>
      <input
        type="number"
        id="productPrice"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />

      <label htmlFor="productDate">Date:</label>
        <input
          type="date"
          id="productDate"
          value={productDate}
          onChange={(e) => setProductDate(e.target.value)}
          max={getCurrentDate()}
        /> 

      <button className='btn-submit' type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
