import React, { useState } from 'react';
import '../styles/Form.css';

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productNumber, setProductNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { productName, productId, productPrice, productNumber };
    onAddProduct(newProduct);
    setProductName('');
    setProductId('');
    setProductPrice('');
    setProductNumber('');
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

      <label htmlFor="fileUpload">Files(.csv/.xlsx):</label>
      <input
        type="file"
        id="fileUpload"
        accept=".xlsx,.csv"
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
