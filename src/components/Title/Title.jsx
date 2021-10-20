import React from "react";

import styles from "./TitleStyles.module.css";

class Title extends React.Component {
  render() {
    return <h1 className={styles.title}>{this.props.value}</h1>;
  }
}

// TODO: describe prop types

export { Title };
