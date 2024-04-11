import React, { Component } from "react";
import Lamp from "./Lamp";
import Sibling from "./Sibling";

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: true,
    };
  }

  callbackState = () => {
    this.setState({
      toggler: !this.state.toggler,
    });
  };

  render() {
    return (
      <>
        <Lamp
          toggleState={this.state.toggler}
          callbackParent={this.callbackState}
        />
        <Sibling toggleText={this.state.toggler} />
      </>
    );
  }
}

export default Scene;
