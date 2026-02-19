import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="footer-title">Contact Us</div>
          <div>Email: info@pethaven.org</div>
          <div>Phone: +65 1234 5678</div>
          <div>123 Pet Haven Lane, Singapore 123456</div>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
            <img className="footer-social-icon" src="facebook.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
            <img className="footer-social-icon" src="instagram.svg" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter">
            <img className="footer-social-icon" src="twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">&copy; {new Date().getFullYear()} Pet Haven. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
