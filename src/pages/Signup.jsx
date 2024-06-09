import React from 'react';
import '../styles/Signup.css';
import '../styles/Login.css';

function Signup() {
  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Welcome</h1>
          <div className="input-box">
            <input type="text" placeholder='Name' required />
            <i className='bx bxs-user'></i> {/* Utilisez className au lieu de class */}
          </div>

          <div className="input-box">
            <input type="text" placeholder='Surname' required />
            <i className='bx bxs-user'></i> {/* Utilisez className au lieu de class */}
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <i className='bx bxs-lock-alt'></i> {/* Utilisez className au lieu de class */}
          </div>

          <div className="input-box">
            <input type="password" placeholder='Confirmed password' required />
            <i className='bx bxs-lock-alt'></i> {/* Utilisez className au lieu de class */}
          </div>

          <button type='submit' className="btn-sign">Sign up</button> {/* Utilisez className au lieu de class */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
