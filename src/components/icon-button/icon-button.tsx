import React from "react";

import "./icon-button.css"

export default function IconButton(props: {icon: string, text: string, background_color: string, text_color: string, width: string}){

    return <div className="icon-button" style={{backgroundColor: props.background_color, width: props.width}}>
        
        <img className="icon" src={props.icon}/>
        <a className="icon-text" style={{color: props.text_color}} >{props.text}</a>

    </div>
}