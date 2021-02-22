import React, { Component } from "react";
import styles from "./Vidget.module.css";

class Vidget extends Component {
  state = { value: 0 };

  handleIncrement = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>{this.props.classtitle}</button>
      </div>
    );
  }
}

export default Vidget;
