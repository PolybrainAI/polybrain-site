import React from 'react';
import './home.css';

import Header from '../../components/header/header'

import landingArt from "../../assets/landing-art.png"
import landingNumbers from "../../assets/landing-numbers.svg"
import landingStepsArt from "../../assets/landing-steps-art.png"

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

      <div id='setup-steps'>
        <img src={landingNumbers} id="enumeration"/>
        <img src={landingStepsArt} className="art"/>
        <h2>Let's get you setup</h2>

        <div className='l1'>
        <button className='btn-trace' id="signup">Create Account</button>
        <a>or</a>
        <a id="login">Log In</a>
        </div>

        <p className='l2'>Connect your <a href="https://onshape.com" target="_blank">OnShape</a> and <a href="https://platform.openai.com" target="_blank">OpenAI</a> accounts</p>
        <p className='l3'>Install the <a target="_blank">Chrome Plugin</a></p>
      </div>

    </div>
  );
}
