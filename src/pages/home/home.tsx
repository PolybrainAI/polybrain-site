/*

Landing/home page for polybrain.xyz

*/
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import "./home.css";

import Header from "../../components/header/header";
import IconButton from "../../components/icon-button/icon-button";

import {
  kofiLogo,
  landingArt,
  landingCarbonArt,
  landingNumbersArt,
  landingStepsArt,
} from "../../api/cdn";
import { paypalLogo } from "../../api/cdn";
import { get_api_base, isLoggedIn } from "../../api/api";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const FLIP_DISTANCE = 1200; // point on page to flip body color

  // Check if logged in
  useEffect(() => {
    async function inner() {
      setLoggedIn(await isLoggedIn());
    }
    inner();
  }, []);

  // Watch scroll
  var last_offset = useRef(0);
  // var last_offset = 0;
  useEffect(() => {
    function onScroll() {
      // flip body color depending on location
      if (
        (window.scrollY - FLIP_DISTANCE) *
          (last_offset.current - FLIP_DISTANCE) <
        1
      ) {
        document.body.style.backgroundColor =
          window.scrollY < FLIP_DISTANCE ? "#4548A3" : "#3D646A";
      }

      last_offset.current = window.scrollY;
      setOffset(window.scrollY);
    }
    // clean up code
    document.body.style.backgroundColor = "#4548A3";
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fade-with-vis in listener
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    const fadeElements = document.querySelectorAll(".fade-with-vis");
    fadeElements.forEach((el) => observer.observe(el));
  }, []);

  // Cursor tracker
  useEffect(() => {
    const glowElements = document.querySelectorAll(".cursor-glow");

    function add_glow_tracking(element: HTMLElement) {
      const rect = element.getBoundingClientRect();

      function mouse_listener(ev) {
        const x = ev.clientX;
        const y = ev.clientY;
        element.style.background = `radial-gradient(circle at ${
          x - rect.left
        }px ${y - rect.top}px, #FFFFFF14 10%, #FFFFFF10 50%)`;
      }

      element.addEventListener("mouseenter", () => {
        element.addEventListener("mousemove", mouse_listener);
      });
      element.addEventListener("mouseleave", () => {
        element.removeEventListener("mousemove", mouse_listener);
        element.style.background = "#FFFFFF10";
      });
    }

    glowElements.forEach((el) => {
      add_glow_tracking(el as HTMLElement);
    });
  });

  function redirectToLogin() {
    window.location.href = `${get_api_base()}auth0/login`;
  }

  return (
    <div id="home-page">
      <Header></Header>

      <div id="landing">
        <img
          id="landing-art"
          alt="landing art"
          src={landingArt}
          style={{ top: offset < window.innerHeight ? -offset / 4 : -1e4 }}
        />
        <div className="align-center-vert">
          <div id="landing-interface">
            <h1>Building Parametric CAD with AI</h1>

            <div className="btn-container">
              <button
                className="btn-fill btn-glow"
                id="signup"
                onClick={redirectToLogin}
              >
                Get Started
              </button>
              <button
                className="btn-trace"
                id="login"
                onClick={redirectToLogin}
                style={{ display: loggedIn ? "none" : "inline-block" }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="setup-steps">
        <img src={landingNumbersArt} id="enumeration" alt="" />
        <img
          src={landingStepsArt}
          className="art fade-with-vis"
          id="landing-steps-art"
          alt=""
        />
        <h2>Let's get you setup</h2>

        <div className="l1 fade-with-vis">
          <button className="btn-trace" id="signup" onClick={redirectToLogin}>
            Create Account
          </button>
          <a>or</a>
          <a id="login" href={`${get_api_base()}auth0/login`}>
            Log In
          </a>
        </div>

        <p className="l2 fade-with-vis">
          Connect your{" "}
          <a href="https://onshape.com" target="_blank" rel="noreferrer">
            OnShape
          </a>{" "}
          and{" "}
          <a
            href="https://platform.openai.com"
            target="_blank"
            rel="noreferrer"
          >
            OpenAI
          </a>{" "}
          accounts
        </p>
        <p className="l3 fade-with-vis">
          Install the <a target="_blank">Chrome Plugin</a>
        </p>

        <div className="center-contents-horiz">
          <div className="card-container">
            <div
              className="card left cursor-glow"
              onClick={() => {
                window
                  .open("https://github.com/PolybrainAI", "_blank")
                  ?.focus();
              }}
            >
              <h3 className="noselect">Interesting in Contributing?</h3>
              <a className="noselect">
                All of the Polybrain source code is open source and available on
                GitHub
              </a>
              <img alt="" className="art" src={landingCarbonArt} />
            </div>
            <div className="card right cursor-glow">
              <h3 className="noselect">Sponsor the Project</h3>
              <a className="noselect">
                Polybrain is an independent, self funded project. Leave a tip to
                the creator if you feel so kind. Anything is greatly
                appreciated!
              </a>

              <div className="flex-center-vert">
                <IconButton
                  icon={kofiLogo}
                  text="Support me on KoFi"
                  background_color="#FFB3B31A"
                  text_color="white"
                  width="270px"
                  onClick={() => {
                    window
                      .open("https://ko-fi.com/kyletennison", "_blank")
                      ?.focus();
                  }}
                />
                <IconButton
                  icon={paypalLogo}
                  text="Donate through PayPal"
                  background_color="#B3D6FF1A"
                  text_color="white"
                  width="270px"
                  onClick={() => {
                    window
                      .open("http://donate.kyletennison.com", "_blank")
                      ?.focus();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="demo-section">
        <h1>Polybrain in Action</h1>
        <p>
          Check out this demo showcasing how Polybrain can create simple OnShape
          models
        </p>
        <iframe
          className="yt-video"
          src="https://www.youtube.com/embed/pkFvQh476Wk?si=aQqa6hHlIdlMSnxJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
