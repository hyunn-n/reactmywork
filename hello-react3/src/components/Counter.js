// counter.js

import React, { Component } from "react";
import App from "../App";

class Counter extends Component {
  constructor(props) {
    super(props); // Component
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    // render :호출이 약속된 메소드
    // { } = 구조분해할당
    const { number, fixedNumber } = this.state;
    const onClickAdd = () => {
      this.setState((prevState, props) => {
        return {
          number: prevState.number + 1,
        };
      });
      this.setState((prevState, props) => {
        return {
          number: prevState.number + 1,
        };
      });
    };

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixedNumber}</h2>
        <button onClick={onClickAdd}>+2</button>
      </div>
    );
  }
}

export default Counter;