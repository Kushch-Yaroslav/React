import React, { Component } from "react";
import styles from "./TodoForm.module.css";
import cx from "classnames";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      isInputValid: true,
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    if (value.includes(" ")) {
      this.setState({
        isInputValid: false,
      });
    } else {
      this.setState({
        isInputValid: true,
      });
    }
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.sendDataToParent(this.state.todo);
    this.setState({
      todo: "",
    });
  };

  render() {
    const { todo, isInputValid } = this.state;
    const cnames = cx([styles.input], {
      [styles.valid]: isInputValid,
      [styles.invalid]: !isInputValid,
    });

    return (
      <form onSubmit={this.submitHandler} className={styles.container}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={this.changeHandler}
          className={cnames}
        />
        <button>Add item</button>
      </form>
    );
  }
}

export default TodoForm;
