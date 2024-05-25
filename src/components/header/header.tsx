import React from 'react';
import logo from './../../logo-no-background.svg';
import './header.css';

export default function Header() {
  return (
    <div className="header">

      <img src={logo} className="logo"/>
      <a className="logo-font">Polybrain</a>

      <a className="header-link">Contribute</a>
      <a className="header-link">Pricing</a>
      <a className="header-link">FAQ</a>

      <a className='header-link' id="login">Log In</a>
      <a className='header-link' id="signup">Sign Up</a>
    </div>
  );
}
