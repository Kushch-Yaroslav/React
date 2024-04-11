import React from "react";

const Container = (props) => {
  return (
    <div style={{ maxWidth: "1200px", textAlign: "center" }}>
      {props.children}
    </div>
  );
};

export default Container;
