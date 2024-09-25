import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import JoinUsPage from './components/JoinUsPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import CreateNewPasswordPage from './components/CreateNewPasswordPage';
import SignupWithGooglePage from './components/SignupWithGooglePage';
import HomePage from './components/HomePage';

import './App.css';

const App = () => {
  return (
    
    <div>
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#ff5500', padding: '1rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, flexWrap: 'wrap' }}>
        <Link className="heading" to="/CreateNewPasswordPage" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem', justifyItems: 'start' }}>DRIBBBLE</Link>
        <div className="search-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
          <input type="text" placeholder="Search..." style={{ width: '8.5rem', flexGrow: 1 }} />
          <i className="fas fa-search" style={{ color: 'white', marginLeft: '0.5rem' }}></i>
        </div>
      </div>
      <div className="nav-link" style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '1.5rem' }}>Login</Link>
        <Link to="/join-us" style={{ color: 'white', textDecoration: 'none' }}>Sign up</Link>
      </div>
    </nav>
  
  
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/join-us" element={<JoinUsPage />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/create-new-password" element={<CreateNewPasswordPage  />} />
        <Route exact path="/signup-with-google" element={<SignupWithGooglePage/>} />
      </Routes>

      <footer className="footer">
        <div className="container-one">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-section">
                <h3>Dribbble</h3>
                <p>Subscribe</p>
                <p>Web App Authentication flow</p>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <div className="input-group-append">
                    <span className="input-group-text" aria-hidden="true">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-section">
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-section">
                <h3>Account</h3>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-section">
                <h3>Quick Link</h3>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
              <div className="footer-section">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div className="app-store-links">
                 
                </div>
                
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p>&copy; Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </footer>
 
    </div>
  );
};

export default App;
