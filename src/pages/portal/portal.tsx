import React, { useEffect, useState } from "react";

import Accordion from 'react-bootstrap/Accordion';

import Header from "../../components/header/header"
import "./portal.css"
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { logOut, isLoggedIn, getUserInfo } from "../../api/api";

export default function Portal() {

    const navigate = useNavigate();
    const [username, setUsernmae] = useState("");
    const [selectedMenu, setSelectedMenu] = useState("main-portal")

    // Redirect if not logged in
    useEffect(() => {
        document.body.style.backgroundColor = "white"; // sometimes leftover from home page

        
        async function inner(){
            const user_info = await getUserInfo();

            if (user_info === null){
                window.location.href = "http://localhost:3000/";
            }
            else{
                console.log(`setting username to ${user_info.given_name}`)
                console.log(user_info)
                setUsernmae(user_info.given_name)
        }}
        inner()

    }, [])

    // Click handler for menu items
    useEffect(() => {
        const menu_items = document.querySelectorAll(".left > .btn-list-item")
        function menuClickHandle(event: Event) {

            const selectedElement = event.target;

            if (selectedElement == null) {
                console.error(`Unable to extract clicked element from event: ${event}`)
                return
            }

            // remove existing classes
            menu_items.forEach((el) => {
                (el as HTMLElement).classList.remove("selected")
            });

            (selectedElement as HTMLElement).classList.add("selected")

        }

        menu_items.forEach((el) => {
            (el as HTMLElement).addEventListener("click", menuClickHandle)
        })

        console.log("loaded menu items")

    }, [])

    return <div id="portal-page">
        <Header />
        <h1>Welcome, {username}</h1>
        <div className="flexbox">
            <div className="left">
                <button className="btn-list-item selected">
                    <i className="bi bi-file-person"></i>
                    Main Portal
                </button>
                <button className="btn-list-item">
                    <i className="bi bi-gear"></i>
                    More Settings
                </button>
                <button className="btn-list-item" onClick={(ev) => {logOut()}}>
                    <i className="bi bi-door-open"></i>
                    Log Out
                </button>
                <button className="btn-list-item" style={{ color: "#E63939", top: "10px" }}>
                    <i className="bi bi-exclamation-triangle"></i>
                    Delete Account
                </button>



            </div>
            <div className="right">
                <p>
                    Polybrain needs a little information to get you up and running. Follow these three steps and you should be on your way.
                    If anything changes, you can update it here at any time. <br /><br />

                    By continuing to set up your account, you agree to have read and agree to all of the <a href="/blog/terms-and-conditions">Terms and Conditions.</a>
                </p>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><i className="bi bi-1-circle accordion-title-icon"></i><section className="accordion-title-text">Create an Account</section></Accordion.Header>
                        <Accordion.Body>
                            If you're reading this, that means you have successfully setup and logged into your account.
                            Congratulations! You can continue onto the next step.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><i className="bi bi-2-circle accordion-title-icon"></i><section className="accordion-title-text" aria-expanded="true">Connect your OnShape and OpenAI Accounts</section></Accordion.Header>
                        <Accordion.Body>

                            <h3>OnShape:</h3>
                            <p>Polybrain is a chrome extension, not an OnShape cloud connected app.
                                For this reason, we cannot use the OnShape OAuth system.
                                Instead, you will need to provide OnShape developer keys, available at dev-portal.onshape.com/keys.
                            </p>

                            <div className="flexbox">
                                <div className="accordion-section-left">
                                    <label>
                                        <p>Access Key</p>
                                        <input className="text-input secret" placeholder="Paste your access key here" type="password"/>
                                    </label>
                                    <label>
                                        <p>Secret Key</p>
                                        <input className="text-input secret" placeholder="Paste your access key here" type="password"/>
                                    </label>
                                    <div>
                                        <button className="btn-fill dark save" id="save-onshape-input">Save</button>
                                        <button className="btn-trace dark cancel" id="cancel-onshape-input">Cancel</button>
                                    </div>
                                </div>
                                <div className="accordion-section-right ">
                                <div>
                                    <iframe src="https://www.youtube.com/embed/NpEaa2P7qZI?si=HMnP10Q78w7sKQWz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                </div>
                            </div>
                            <br></br>
                            <h3>OpenAI:</h3>
                            <p>To avoid handling transactions, Polybrain connects directly to the user's OpenAI account to make LLM requests. 
                                If Polybrain is successful, it may eventually move to its own token system. 
                                If you do not have an OpenAI account, you can create one at <a href="https://platform.openai.com/signup" target="_blank" rel="noreferrer">platform.openai.com/signup</a>.
                            </p>

                            <div className="flexbox">
                                <div className="accordion-section-left">
                                    <label id="openai-api-key-label">
                                        <p>API Key</p>
                                        <input id="openai-api-key" className="text-input secret" placeholder="Paste your OpenAI API key here" type="password"/>
                                    </label>
                                    <div>
                                        <button className="btn-fill dark save" id="save-openai-input">Save</button>
                                        <button className="btn-trace dark cancel" id="cancel-openai-input">Cancel</button>
                                    </div>
                                </div>
                                <div className="accordion-section-right ">
                                <div>
                                    <iframe src="https://www.youtube.com/embed/NpEaa2P7qZI?si=HMnP10Q78w7sKQWz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                </div>
                            </div>


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><i className="bi bi-3-circle accordion-title-icon"></i><section className="accordion-title-text">Install the Chrome Plugin</section></Accordion.Header>
                        <Accordion.Body>
                            Polybrain is coming to the Chrome Store soon. Hold tight!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
        <Footer />
    </div>
}