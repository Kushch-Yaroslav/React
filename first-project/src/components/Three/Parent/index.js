import React, { Component } from "react";
import Subparent from "./Subparent";

function Parent(props) {
  return (
    <div style={{ border: "inherit", padding: "20px" }}>
      <p>Parent</p>
      <Subparent />
    </div>
  );
}

export default Parent;
