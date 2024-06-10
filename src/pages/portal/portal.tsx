/*

Entry point to the user portal

*/
import React, { useEffect, useRef, useState } from "react";

import Alert, { AlertColor } from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Header from "../../components/header/header";
import "./portal.css";
import Footer from "../../components/footer/footer";
import { getUserInfo, API_BASE } from "../../api/api";

import MainPortalSection from "./main-portal-section";
import PortalTree from "./portal-tree";

export default function Portal() {
  const ALERT_SHOW_TIME = 5000; // 5s
  const MOBILE_SIZE_THRESHOLD = 870; // px

  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [alertContents, setAlertContents] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");
  var sleep_id = useRef("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("main-menu-btn");
  const [deleteCheckText, setDeleteCheckTest] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    document.body.style.backgroundColor = "white"; // sometimes leftover from home page

    async function inner() {
      const user_info = await getUserInfo();

      if (user_info === null) {
        window.location.href = "http://localhost:3000/";
      } else {
        setUsername(user_info.username);
        setUserEmail(user_info.email);
      }
    }
    inner();
  }, []);

  // Warning for mobile users
  useEffect(() => {
    const handle_resize = () => {
      if (window.innerWidth < MOBILE_SIZE_THRESHOLD) {
        alert(
          "Use a computer to setup Polybrain. Mobile is not yet supported.",
        );
      }
    };

    window.addEventListener("resize", () => {
      handle_resize();
    });

    handle_resize(); // run on load
  }, []);

  // Click handler for menu items
  useEffect(() => {
    const menu_items = document.querySelectorAll(".left > .btn-list-item");
    function menuClickHandle(event: Event) {
      setSelectedMenu((event.target as HTMLElement).id);
    }

    menu_items.forEach((el) => {
      (el as HTMLElement).addEventListener("click", menuClickHandle);
    });
  }, []);

  function triggerAlert(message: string, severity: AlertColor) {
    const alert_element = document.querySelector("#alert-banner");
    setAlertSeverity(severity);
    setAlertContents(message);

    if (alert_element === null) {
      console.error("Unable to find alert element");
      alert(message);
      return;
    }

    console.log("triggering alert");

    console.log(alert_element);
    const sleep_id_local = uuidv4();
    sleep_id.current = sleep_id_local;

    (alert_element as HTMLElement).style.opacity = "1";
    (alert_element as HTMLElement).style.transform = "translateY(-20px)";

    setTimeout(() => {
      if (sleep_id.current === sleep_id_local) {
        (alert_element as HTMLElement).style.opacity = "0";
        (alert_element as HTMLElement).style.transform = "translateY(100px)";
      } else {
        console.warn("another alert overrode. not dimming");
      }
    }, ALERT_SHOW_TIME);
  }

  function alertError(message: string) {
    triggerAlert(message, "error");
  }
  function alertSuccess(message: string) {
    triggerAlert(message, "success");
  }
  function alertInfo(message: string) {
    triggerAlert(message, "info");
  }

  return (
    <div id="portal-page">
      <Header />
      <Alert severity={alertSeverity as AlertColor} id="alert-banner">
        {alertContents}
      </Alert>
      <Popup
        open={modalOpen}
        modal
        nested
        onClose={(ev) => {
          setModalOpen(false);
          setSelectedMenu("main-menu-btn");
        }}
      >
        <div id="delete-popup">
          <h2>You can't undo this!</h2>
          <p>
            Once you delete your account, it's gone. We delete all of the
            information you provided to us. To delete you account, type your
            email address below.
          </p>
          <input
            placeholder={userEmail}
            value={deleteCheckText}
            onChange={(ev) => {
              setDeleteCheckTest(ev.target.value);
            }}
            type="text"
          />
          <div className="btn-container">
            <button
              className="cancel"
              onClick={(ev) => {
                setModalOpen(false);
                setSelectedMenu("main-menu-btn");
              }}
            >
              Cancel
            </button>
            <button
              className="delete"
              disabled={userEmail !== deleteCheckText}
              onClick={() => {
                if (userEmail === deleteCheckText) {
                  window.location.href = `${API_BASE}user/delete-self`;
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Popup>
      <h1>Welcome, {username}</h1>
      <div className="flexbox">
        <div className="left">
          <PortalTree
            selectedMenu={selectedMenu}
            deleteAccountModal={setModalOpen}
          />
        </div>

        <div className="right">
          <MainPortalSection
            alertError={alertError}
            alertInfo={alertInfo}
            alertSuccess={alertSuccess}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
