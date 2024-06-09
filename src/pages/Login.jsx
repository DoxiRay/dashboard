import React from 'react';
import saleImage from "../assets/sale.png";
import '../styles/Login.css';
import { Link } from 'react-router-dom'; // Importer Link pour créer un lien vers Signup

function Login() {
  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Welcome back</h1>
          <img src={saleImage} alt="Sale" />
          <div className="input-box">
            <input type="text" placeholder='Name' required />
            <i className='bx bxs-user'></i> {/* Utilisez className au lieu de class */}
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <i className='bx bxs-lock-alt'></i> {/* Utilisez className au lieu de class */}
          </div>

          <button type='submit' className="btn">Login</button> {/* Utilisez className au lieu de class */}

          <div className="register-link">
            <p>Don't have account? <Link to="/signup">Register</Link></p> {/* Utilisez Link pour créer un lien */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
