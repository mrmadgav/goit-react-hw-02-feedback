import React, { Component } from "react";
import styles from "./Statistics.module.css";
import Vidget from "../vidget/Vidget";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={styles.container}>
        <Vidget classtitle={"Good"} />
        <Vidget classtitle={"Neutral"} />
        <Vidget classtitle={"Bad"} />
        <h2>Statistics</h2>
        <span>Good: </span>
        <span>Neutral: </span>
        <span>Bad: </span>
        <span>Total: </span>
        <span>Positive FeedBack: </span>
      </div>
    );
  }
}

export default Statistics;
