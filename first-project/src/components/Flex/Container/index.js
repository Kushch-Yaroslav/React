import React from "react";

const DivFlexContainer = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        backgroundColor: "skyblue",
        margin: "5px",
        height: "75px",
      }}
    >
      {children}
    </div>
  );
};

export default DivFlexContainer;
