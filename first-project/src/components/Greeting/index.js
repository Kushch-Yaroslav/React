import React from "react";
import "./style.css";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreating: true,
    };
  }
  changeGreating = () => {
    this.setState({
      isGreating: !this.state.isGreating,
    });
  };
  render() {
    const { isGreating } = this.state;
    const { userName } = this.props;
    const greetingText = isGreating ? "Hello" : "Bye-Bye";

    return (
      <div className="greeting">
        <h2 onClick={this.changeGreating}>
          {greetingText}, {userName}
        </h2>
      </div>
    );
  }
}

export default Greeting;
