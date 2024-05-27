/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef }  from 'react';
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

  const [offset, setOffset] = useState(0);
  const FLIP_DISTANCE = 400; // point on page to flip body color

  var last_offset = 0;

  useEffect(() => {
      function onScroll() {

        // flip body color depending on location
        if ((window.scrollY - FLIP_DISTANCE) * (last_offset - FLIP_DISTANCE) < 1){
          document.body.style.backgroundColor = (window.scrollY < FLIP_DISTANCE) ? "#4548A3" : "#3D646A"
        }

        last_offset = window.scrollY;
        setOffset(last_offset);

      }
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const triggerRef = useRef(null);

  return (
    <div id="home-page">
      <Header></Header>

      <div id="landing">
        <img id="landing-art" alt="landing art" src={landingArt} style={{top: (offset < window.innerHeight) ? -offset/4 : -1e4}}/>
        <h1>Building Parametric CAD with AI</h1>

        <button className='btn-fill btn-glow' id="signup">Get Started</button>
        <button className='btn-trace' id="login">Log In</button>

      </div>

      <div id='setup-steps'>
        <img src={landingNumbers} id="enumeration" alt="" />
        <img src={landingStepsArt} className="art" alt=""/>
        <h2>Let's get you setup</h2>

        <div className='l1'>
          <button className='btn-trace' id="signup">Create Account</button>
          <a>or</a>
          <a id="login">Log In</a>
        </div>

        <p className='l2'>Connect your <a href="https://onshape.com" target="_blank" rel="noreferrer">OnShape</a> and <a href="https://platform.openai.com" target="_blank" rel="noreferrer">OpenAI</a> accounts</p>
        <p className='l3'>Install the <a target="_blank">Chrome Plugin</a></p>

        <div className='card-container'>

          <div className='card left'>
            <h3>Interesting in Contributing?</h3>
            <a>All of the Polybrain source code is open source and available on GitHub</a>
            <img alt="" className='art' src={landingCarbonArt} />
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
