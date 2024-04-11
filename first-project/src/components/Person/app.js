import React, { Component } from "react";
import Person from ".";
class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      formSubmitted: false, // Флаг для отслеживания отправки формы
    };
  }

  handleChange = ({ target: { value, name } }) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      age: "",
      formSubmitted: true, // Устанавливаем флаг в true после отправки формы
    });
  };

  render() {
    const { name, age, formSubmitted } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Имя"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Возраст"
          name="age"
          value={age}
          onChange={this.handleChange}
        />
        <button onClick={this.handleFormSubmit}>Отправить</button>
        {formSubmitted && <Person userName={name} userAge={age} />}
      </div>
    );
  }
}

export default Apps;
