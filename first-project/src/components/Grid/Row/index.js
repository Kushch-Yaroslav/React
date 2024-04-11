import React from "react";

const Row = (props) => {
  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      {props.children}
    </div>
  );
};

export default Row;
