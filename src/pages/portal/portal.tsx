import React, { useEffect, useRef, useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import Alert, { AlertColor } from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Header from "../../components/header/header";
import "./portal.css";
import Footer from "../../components/footer/footer";
import {
  logOut,
  getUserInfo,
  uploadCredentials,
  getCredentialPreview,
  API_BASE,
} from "../../api/api";

export default function Portal() {
  const ALERT_SHOW_TIME = 5000; // 5s

  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [alertContents, setAlertContents] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");
  var sleep_id = useRef("");

  const [onshapeAccessKey, setOnshapeAccessKey] = useState("");
  const [onshapeSecretKey, setOnshapeSecretKey] = useState("");
  const [openAiApiKey, setOpenAiApiKey] = useState("");
  const [allDevKeysLoaded, setAllDevKeysLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("main-menu-btn")
  const [deleteCheckText, setDeleteCheckTest] = useState("");

  async function load_default_key_states() {
    const credential_preview = await getCredentialPreview();
    if (credential_preview === null) {
      return;
    } else {
      if (credential_preview.has_onshape_access) {
        setOnshapeAccessKey("0".repeat(24));
      } else {
        setOnshapeAccessKey("");
      }
      if (credential_preview.has_onshape_secret) {
        setOnshapeSecretKey("0".repeat(48));
      } else {
        setOnshapeSecretKey("");
      }
      if (credential_preview.has_openai_api) {
        setOpenAiApiKey("0".repeat(51));
      } else {
        setOpenAiApiKey("");
      }
    }
  }
  async function checkAllDevKeysLoaded(): Promise<null> {
    const credential_preview = await getCredentialPreview();
    if (credential_preview === null) {
      setAllDevKeysLoaded(false);
    } else {
      setAllDevKeysLoaded(
        credential_preview.has_onshape_access &&
          credential_preview.has_onshape_secret &&
          credential_preview.has_openai_api,
      );
    }
    return null;
  }

  // Load user credential preview
  useEffect(() => {
    load_default_key_states(); // load placeholder values in inputs

    checkAllDevKeysLoaded();
  }, []);

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

  // Click handler for menu items
  useEffect(() => {
    const menu_items = document.querySelectorAll(".left > .btn-list-item");
    function menuClickHandle(event: Event) {
      setSelectedMenu((event.target as HTMLElement).id)

      // if (selectedElement === null) {
      //   console.error(`Unable to extract clicked element from event: ${event}`);
      //   return;
      // }

      // // remove existing classes
      // menu_items.forEach((el) => {
      //   (el as HTMLElement).classList.remove("selected");
      // });

      // (selectedElement as HTMLElement).classList.add("selected");
    }

    menu_items.forEach((el) => {
      (el as HTMLElement).addEventListener("click", menuClickHandle);
    }
  );
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
      <h1>Welcome, {username}</h1>
      <div className="flexbox">
        <div className="left">
          <button id="main-menu-btn" className={"btn-list-item " + (selectedMenu === "main-menu-btn" ? "selected" : "")}>
            <i className="bi bi-file-person"></i>
            Main Portal
          </button>
          <button id="more-settings-btn" className={"btn-list-item " + (selectedMenu === "more-settings-btn" ? "selected" : "")}>
            <i className="bi bi-gear"></i>
            More Settings
          </button>
          <button
            className="btn-list-item"
            onClick={(ev) => {
              logOut();
            }}
          >
            <i className="bi bi-door-open"></i>
            Log Out
          </button>
          <button
            className={"btn-list-item " + (selectedMenu === "delete-account-button" ? "selected" : "")}
            style={{ color: "#E63939", top: "10px" }}
            id="delete-account-button"
            onClick={(ev) => {setModalOpen(true)}}
          >
            <i className="bi bi-exclamation-triangle"></i>
            Delete Account
          </button>
        </div>
        <Popup 
            open={modalOpen}
            modal 
            nested
            onClose={(ev) => {
              setModalOpen(false);
              setSelectedMenu("main-menu-btn")
            }}
        >
          <div id="delete-popup">
            <h2>You can't undo this!</h2>
            <p>Once you delete your account, it's gone. We delete all of the information you provided to us.
              To delete you account, type your email address below.
            </p>
            <input placeholder={userEmail} value={deleteCheckText}  onChange={(ev) => {setDeleteCheckTest(ev.target.value)}} type="text"/>
            <div className="btn-container">
              <button className="cancel" onClick={(ev)=>{setModalOpen(false); setSelectedMenu("main-menu-btn")}}>Cancel</button>
              <button className="delete" disabled={(userEmail !== deleteCheckText)} onClick={ () => {
                if (userEmail === deleteCheckText){
                  window.location.href = `${API_BASE}user/delete-self`
                }
              }
                
              }>Delete</button>
            </div>

          </div>
        </Popup>
        <div className="right">
          <p>
            Polybrain needs a little information to get you up and running.
            Follow these three steps and you should be on your way. If anything
            changes, you can update it here at any time. <br />
            <br />
            By continuing to set up your account, you agree to have read and
            agree to all of the{" "}
            <a href="/blog/terms-and-conditions">Terms and Conditions.</a>
          </p>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <i className="bi bi-1-circle accordion-title-icon success-glow"></i>
                <section className="accordion-title-text">
                  Create an Account
                </section>
              </Accordion.Header>
              <Accordion.Body>
                If you're reading this, that means you have successfully setup
                and logged into your account. Congratulations! You can continue
                onto the next step.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i
                  className={
                    "bi bi-2-circle accordion-title-icon " +
                    (allDevKeysLoaded ? "success-glow" : "")
                  }
                ></i>
                <section className="accordion-title-text">
                  Connect your OnShape and OpenAI Accounts
                </section>
              </Accordion.Header>
              <Accordion.Body>
                <h3>OnShape:</h3>
                <p>
                  Polybrain is a chrome extension, not an OnShape cloud
                  connected app. For this reason, we cannot use the OnShape
                  OAuth system. Instead, you will need to provide OnShape
                  developer keys, available at dev-portal.onshape.com/keys.
                </p>

                <div className="flexbox">
                  <div className="accordion-section-left">
                    <label>
                      <p>Access Key</p>
                      <input
                        className="text-input secret"
                        placeholder="Paste your access key here"
                        type="password"
                        value={onshapeAccessKey}
                        onChange={(e) => setOnshapeAccessKey(e.target.value)}
                      />
                    </label>
                    <label>
                      <p>Secret Key</p>
                      <input
                        className="text-input secret"
                        placeholder="Paste your access key here"
                        type="password"
                        value={onshapeSecretKey}
                        onChange={(e) => setOnshapeSecretKey(e.target.value)}
                      />
                    </label>
                    <div>
                      <button
                        className="btn-fill dark save"
                        id="save-onshape-input"
                        onClick={(ev) => {
                          uploadCredentials(
                            {
                              onshape_access: onshapeAccessKey,
                              onshape_secret: onshapeSecretKey,
                              openai_api: null,
                            },
                            alertError,
                            alertSuccess,
                          );
                          setTimeout(() => {
                            checkAllDevKeysLoaded();
                          }, 2000);
                        }}
                      >
                        Save
                      </button>
                      <button
                        className="btn-trace dark cancel"
                        id="cancel-onshape-input"
                        onClick={(ev) => {
                          load_default_key_states();
                          alertInfo("Reset OnShape keys to original state");
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="accordion-section-right ">
                    <div>
                      <iframe
                        src="https://www.youtube.com/embed/NpEaa2P7qZI?si=HMnP10Q78w7sKQWz"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <br></br>
                <h3>OpenAI:</h3>
                <p>
                  To avoid handling transactions, Polybrain connects directly to
                  the user's OpenAI account to make LLM requests. If Polybrain
                  is successful, it may eventually move to its own token system.
                  If you do not have an OpenAI account, you can create one at{" "}
                  <a
                    href="https://platform.openai.com/signup"
                    target="_blank"
                    rel="noreferrer"
                  >
                    platform.openai.com/signup
                  </a>
                  .
                </p>

                <div className="flexbox">
                  <div className="accordion-section-left">
                    <label id="openai-api-key-label">
                      <p>API Key</p>
                      <input
                        id="openai-api-key"
                        className="text-input secret"
                        placeholder="Paste your OpenAI API key here"
                        type="password"
                        value={openAiApiKey}
                        onChange={(e) => setOpenAiApiKey(e.target.value)}
                      />
                    </label>
                    <div>
                      <button
                        className="btn-fill dark save"
                        id="save-openai-input"
                        onClick={(ev) => {
                          uploadCredentials(
                            {
                              onshape_access: null,
                              onshape_secret: null,
                              openai_api: openAiApiKey,
                            },
                            alertError,
                            alertSuccess,
                          );
                          setTimeout(() => {
                            checkAllDevKeysLoaded();
                          }, 2000);
                        }}
                      >
                        Save
                      </button>
                      <button
                        className="btn-trace dark cancel"
                        id="cancel-openai-input"
                        onClick={(ev) => {
                          load_default_key_states();
                          alertInfo("Reset OpenAI key to original state");
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="accordion-section-right ">
                    <div>
                      <iframe
                        src="https://www.youtube.com/embed/NpEaa2P7qZI?si=HMnP10Q78w7sKQWz"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <i className="bi bi-3-circle accordion-title-icon"></i>
                <section className="accordion-title-text">
                  Install the Chrome Plugin
                </section>
              </Accordion.Header>
              <Accordion.Body>
                Polybrain is coming to the Chrome Store soon. Hold tight!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
