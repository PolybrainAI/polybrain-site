/*

Utility component to add an icon to a button

*/
import React from "react";
import "./icon-btn.css";

type CallbackFunctionVariadic = (...args: any[]) => void;

export default function IconButton(props: {
  icon: string;
  text: string;
  background_color: string;
  text_color: string;
  width: string;
  onClick: CallbackFunctionVariadic;
}) {
  return (
    <div
      className="icon-btn"
      style={{ backgroundColor: props.background_color, width: props.width }}
      onClick={props.onClick}
    >
      <img className="icon" alt="" src={props.icon} />
      <p className="icon-text" style={{ color: props.text_color }}>
        {props.text}
      </p>
    </div>
  );
}
