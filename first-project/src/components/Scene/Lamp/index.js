import React, { Component } from "react";
import "./style.css";

function Lamp(props) {
  const toggle = () => {
    props.callbackParent();
  };

  const cn = props.toggleState ? "lamp-off" : "lamp-on";
  return (
    <>
      <div className={cn}></div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}

export default Lamp;
