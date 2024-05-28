import React, { useEffect, useState } from "react";

import Accordion from 'react-bootstrap/Accordion';

import Header from "../../components/header/header"
import "./portal.css"

export default function Portal() {

    const [username, setUsernmae] = useState("John");

    const [selectedMenu, setSelectedMenu] = useState("main-portal")

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
                        <Accordion.Header><i className="bi bi-2-circle accordion-title-icon"></i><section className="accordion-title-text">Connect your OnShape and OpenAI Accounts</section></Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><i className="bi bi-3-circle accordion-title-icon"></i><section className="accordion-title-text">Install the Chrome Plugin</section></Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </div>
}