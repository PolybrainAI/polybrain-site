import React from 'react';
import logo from './../../assets/logo-no-background.svg';
import './header.css';

export default function Header() {
  return (
    <div id="header">
      <div className="flexbox">
        <img src={logo} className="logo" alt=""/>
        <a className="logo-font" href="/">Polybrain</a>

        <a className="header-link">Contribute</a>
        <a className="header-link">Pricing</a>
        <a className="header-link">FAQ</a>

        <a className='header-link' id="login">Log In</a>
        <a className='header-link' id="signup">Sign Up</a>
      </div>
    </div>
  );
}
