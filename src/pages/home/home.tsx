import React from 'react';
import './home.css';

import Header from '../../components/header/header'
import IconButton from '../../components/icon-button/icon-button';

import landingArt from "../../assets/landing-art.png"
import landingNumbers from "../../assets/landing-numbers.svg"
import landingStepsArt from "../../assets/landing-steps-art.png"
import landingCarbonArt from "../../assets/landing-carbon-art.png"
import kofiLogo from "../../assets/kofi-logo.svg"
import paypalLogo from "../../assets/paypal-logo.svg"

export default function Home() {
  return (
    <div id="home-page">
      <Header></Header>

      <div id="landing">
        <img alt="landing art" src={landingArt} />
        <h1>Building Parametric CAD with AI</h1>

        <button className='btn-fill btn-glow' id="signup">Get Started</button>
        <button className='btn-trace' id="login">Log In</button>

      </div>

      <div id='setup-steps'>
        <img src={landingNumbers} id="enumeration" />
        <img src={landingStepsArt} className="art" />
        <h2>Let's get you setup</h2>

        <div className='l1'>
          <button className='btn-trace' id="signup">Create Account</button>
          <a>or</a>
          <a id="login">Log In</a>
        </div>

        <p className='l2'>Connect your <a href="https://onshape.com" target="_blank">OnShape</a> and <a href="https://platform.openai.com" target="_blank">OpenAI</a> accounts</p>
        <p className='l3'>Install the <a target="_blank">Chrome Plugin</a></p>

        <div className='card-container'>

          <div className='card left'>
            <h3>Interesting in Contributing?</h3>
            <a>All of the Polybrain source code is open source and available on GitHub</a>
            <img className='art' src={landingCarbonArt} />
          </div>
          <div className='card right'>
            <h3>Sponsor the Project</h3>
            <a>Polybrain is an independent, self funded project.
              Leave a tip to the creator if you feel so kind.
              Anything is greatly appreciated!</a>

            <div className='flex-center-vert'>


              <IconButton icon={kofiLogo} text="Support us with KoFi" background_color="#FFB3B31A" text_color='white' width='270px' />
              <IconButton icon={paypalLogo} text="Donate through PayPal" background_color="#B3D6FF1A" text_color='white' width='270px' />

            </div>

          </div>
        </div>
      </div>

      <div id="demo-section">
        <h1>Polybrain in Action</h1>
        <p>Check out this demo showcasing how Polybrain can create simple OnShape models</p>
        <iframe className="yt-video" src="https://www.youtube.com/embed/pkFvQh476Wk?si=aQqa6hHlIdlMSnxJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

    </div>
  );
}
