import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Contact Us</p>
            <p>Book an Appointment</p>
            <p>FAQs</p>
            <p>Fendi Services</p>
          </div>
          <div className="footer-section">
            <h4>LEGAL & PRIVACY</h4>
            <p>Privacy Policies</p>
            <p>Cookie Policy</p>
            <p>Responsible disclosure policy</p>
            <p>Website terms of use</p>
          </div>
          <div className="footer-section__input">
            <h4>Subscribe</h4>
            <p>Stay updated with our latest news and offers.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ fontFamily: "auto" }}>
            &copy; © FENDI - ALL RIGHTS RESERVED - P. IVA 00900421009 LICENZA
            SIAE N. 3566/I/1417 - FENDI International Official Online Store
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
