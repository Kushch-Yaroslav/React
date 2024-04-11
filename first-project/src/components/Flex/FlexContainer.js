import React from "react";

const FlexContainer = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {props.children}
    </div>
  );
};

export default FlexContainer;
