import React, { Component } from "react";

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <span>{message}</span>;
  }
}

export default Notification;
