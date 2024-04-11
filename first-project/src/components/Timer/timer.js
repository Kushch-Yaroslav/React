import React, { Component } from "react";
import { format, addSeconds } from "date-fns";
import { th } from "date-fns/locale";

class Timea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Start",
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }

  handlerButtonStart = () => {
    const btn = this.state.buttonText;
    if (btn === "Start") {
      this.start();
      this.setState({ buttonText: "Pause" });
    } else if (btn === "Pause") {
      this.pause();
      this.setState({ buttonText: "Countine" });
    } else if (btn === "Countine") {
      this.start();
      this.setState({ buttonText: "Pause" });
    }
  };

  start = () => {
    this.intervalId = setInterval(() => {
      const { time } = this.state;
      const newDate = addSeconds(time, 1);
      this.setState({
        time: newDate,
      });
    }, 1000);
  };

  clear = () => {
    this.setState({ buttonText: "Start" });
    clearInterval(this.intervalId);
    const timeClear = new Date(0, 0, 0, 0, 0, 0);
    this.setState({
      time: timeClear,
    });
  };
  pause = () => {
    clearInterval(this.intervalId);
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2> {format(time, "hh:mm:ss")}</h2>
        <button onClick={this.handlerButtonStart}>
          {this.state.buttonText}
        </button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Timea;
