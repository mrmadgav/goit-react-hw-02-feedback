import React, { Component } from "react";
import styles from "./Statistics.module.css";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import PropTypes from "prop-types";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateGood = (good) => {
    this.setState({ good: good });
  };

  handleStateNeutral = (neutral) => {
    this.setState({ neutral: neutral });
  };

  handleStateBad = (bad) => {
    this.setState({ bad: bad });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <Section title="Please, leave feedback:">
          <div className={styles.feedbackWrapper}>
            <FeedbackOptions
              classtitle={"Good"}
              handleState={this.handleStateGood}
            />
            <FeedbackOptions
              classtitle={"Neutral"}
              handleState={this.handleStateNeutral}
            />
            <FeedbackOptions
              classtitle={"Bad"}
              handleState={this.handleStateBad}
            />
          </div>
        </Section>
        <Section title="Statistics:">
          {this.countTotalFeedback() ? (
            <div className={styles.statWrapper}>
              <span>Good: {this.state.good}</span>
              <span>Neutral: {this.state.neutral}</span>
              <span>Bad: {this.state.bad}</span>
              <span>Total: {this.countTotalFeedback()}</span>
              <span>
                Positive FeedBack: {this.countPositiveFeedbackPercentage()}%
              </span>
            </div>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
