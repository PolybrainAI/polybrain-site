import React from 'react';
import './home.css';

import Header from '../../components/header/header'

import landingArt from "../../assets/landing-art.png"

export default function Home() {
  return (
    <div id="home-page">
      <Header></Header>

      <div id="landing">
        <img alt="landing art" src={landingArt}/>
        <h1>Building Parametric CAD with AI</h1>

        <button className='btn-fill btn-glow' id="signup">Get Started</button>
        <button className='btn-trace' id="login">Log In</button>

      </div>
      

    </div>
  );
}
