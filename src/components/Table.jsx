import React, { useState, useEffect } from 'react';
import '../styles/Table.css';

const Table = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/products');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const filteredData = data.filter((product) => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.number.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.price.toString().toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate = selectedDate === '' || product.date === selectedDate;

        return matchesSearchTerm && matchesDate;
    });

    return (
        <div className="table-wrapper">
            <input 
                type="text" 
                placeholder="Search🔎..." 
                value={searchTerm}
                onChange={handleSearchChange}
                className='search-input'
            />
            <input 
                type="date" 
                value={selectedDate}
                onChange={handleDateChange}
                className='date-input'
                max={getCurrentDate()}
            />
            <table className='table-container'>
                <thead>
                    <tr className='table-tête'>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Number</th>
                        <th>Unitary price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.id}</td>
                            <td>{product.number}</td>
                            <td>{product.price}</td>
                            <td>{product.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
