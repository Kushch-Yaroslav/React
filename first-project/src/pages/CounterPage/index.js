import React from "react";
import Counter from "../../components/Counter";

class CounterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1,
    };
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: Number(value),
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input
          type="range"
          min="1"
          max="50"
          name="inputValue"
          value={inputValue}
          onChange={this.changeHandler}
        />
        <Counter step={inputValue}>
          {({ count, increment, decrement }) => {
            return (
              <div>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
              </div>
            );
          }}
        </Counter>
      </div>
    );
  }
}
export default CounterPage;
