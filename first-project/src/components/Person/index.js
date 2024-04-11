import React, { Component } from "react";

class Person extends Component {
  render() {
    const { userName, userAge } = this.props;
    if (userName && userAge) {
      return (
        <>
          <p>
            name: {userName}, age: {userAge}
          </p>
        </>
      );
    }
  }
}

export default Person;
