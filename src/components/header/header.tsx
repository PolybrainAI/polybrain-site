import React, { useEffect, useState } from "react";
import logo from "./../../assets/logo-no-background.svg";
import "./header.css";
import { getUserInfo, API_BASE } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function inner() {
      const user = await getUserInfo();
      setLoggedIn(user !== null);

      if (user !== null) {
        setUsername(user.username);
      }
    }

    inner();
  }, []);

  return (
    <div id="header">
      <div className="flexbox">
        <img src={logo} className="logo" alt="" />
        <a className="logo-font" href="/">
          Polybrain
        </a>

        <a className="header-link">Contribute</a>
        <a className="header-link">Pricing</a>
        <a className="header-link">FAQ</a>

        <a
          className="header-link"
          id="login"
          href={`${API_BASE}auth0/login`}
          style={{ display: loggedIn ? "none" : "block" }}
        >
          Log In
        </a>
        <a
          className="header-link"
          id="signup"
          href={`${API_BASE}auth0/login`}
          style={{ display: loggedIn ? "none" : "block" }}
        >
          Sign Up
        </a>

        <div
          className="header"
          id="profile"
          style={{ display: loggedIn ? "block" : "none" }}
          onClick={(ev) => {
            navigate("/portal");
          }}
        >
          <i className="bi bi-person-circle"></i>
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
}
