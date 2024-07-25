import React from "react";
import "./footer.css"; // Assume you have some basic styling in this CSS file

import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-links">
          <a href="/technical">Technical</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms & Conditions</a>
          <a
            href="https://github.com/PolybrainAI/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href="/pricing">Pricing</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
