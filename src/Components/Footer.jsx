import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-square"></div>
            <span>Logo</span>
          </div>
        </div>

        <div className="nav-center">
          <div className="nav-group">
            <h3>Mobile app</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Live share</a></li>
              <li><a href="#">Video record</a></li>
            </ul>
          </div>

          <div className="nav-group">
            <h3>Community</h3>
            <ul>
              <li><a href="#">Featured artists</a></li>
              <li><a href="#">The Portal</a></li>
              <li><a href="#">Live events</a></li>
            </ul>
          </div>

          <div className="nav-group">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">History</a></li>
            </ul>
          </div>
        </div>

        <div className="nav-right">
          <button className="register-btn">Register</button>
          <button className="login-btn-new">Log in</button>
        </div>
      </nav>

      <footer className="footer">
        <div className="footer-left">
          <p>© Photo, Inc. 2019. We love our users!</p>
        </div>
        <div className="footer-right">
          <p>Follow us:</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <div className="social-icon">f</div>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">t</div>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">in</div>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">ig</div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;