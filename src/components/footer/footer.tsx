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
          <a href="/blog/contact">Contact</a>
          <a href="/blog/terms">Terms & Conditions</a>
          <a
            href="https://github.com/PolybrainAI/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href="/blog/pricing">Pricing</a>
          <a href="/blog/faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
