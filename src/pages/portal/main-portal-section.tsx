/*

Navigation menu to switch between portal sections

*/

import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
    uploadCredentials,
    getCredentialPreview,
  } from "../../api/api";

type AlertFunction = (message: string) => void;
export default function MainPortalSection(props: {alertError: AlertFunction, alertInfo: AlertFunction, alertSuccess: AlertFunction}) {

    const [allDevKeysLoaded, setAllDevKeysLoaded] = useState(false);
    const [onshapeAccessKey, setOnshapeAccessKey] = useState("");
    const [onshapeSecretKey, setOnshapeSecretKey] = useState("");
    const [openAiApiKey, setOpenAiApiKey] = useState("");

    /// Loads values into key fields depending on credential upload status
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

    return <>
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
                                            props.alertError,
                                            props.alertSuccess,
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
                                        props.alertInfo("Reset OnShape keys to original state");
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
                                            props.alertError,
                                            props.alertSuccess,
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
                                        props.alertInfo("Reset OpenAI key to original state");
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
        </Accordion></>
}