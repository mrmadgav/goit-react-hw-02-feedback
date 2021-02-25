import React, { Component } from "react";
import styles from "./Section.module.css";

class Section extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.container}>
        <h2 className="sectionTitle">{title}</h2>
        <>{this.props.children}</>
      </div>
    );
  }
}

export default Section;
