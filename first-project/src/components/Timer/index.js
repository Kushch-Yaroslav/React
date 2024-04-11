import React, { Component, useState, useEffect } from "react";
import { format, addSeconds } from "date-fns";

const Timer = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 1, 0, 0));
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setTimeout(() => {
        setTime(addSeconds(time, 1));
      }, 1000);
    }

    return () => {
      setTimeout(intervalId);
    };
  });

  const switchRunnig = () => {
    setRunning(!isRunning);
  };

  const clear = () => {
    setTime(new Date(0, 0, 0, 1, 0, 0));
  };

  const buttonText = isRunning ? "stop" : "start";

  return (
    <div>
      <h2> {format(time, "hh:mm:ss")}</h2>
      <button onClick={switchRunnig}>{buttonText} </button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Timer;
