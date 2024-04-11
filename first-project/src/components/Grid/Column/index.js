import React from "react";
import "./Column.css";

const Column = (props) => {
  const { colNum, children } = props;
  return <div className={`col col-${colNum}`}>{children}</div>;
};

export default Column;
