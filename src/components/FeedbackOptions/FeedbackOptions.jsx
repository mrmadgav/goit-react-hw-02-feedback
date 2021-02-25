import React, { Component } from "react";
import styles from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  state = { value: 0 };

  handleIncrement = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }));
    this.props.handleState(this.state.value + 1);
  };

  render() {
    return (
      <div>
        <button className={styles.btn} onClick={this.handleIncrement}>{this.props.classtitle}</button>
      </div>
    );
  }
}

export default FeedbackOptions;
