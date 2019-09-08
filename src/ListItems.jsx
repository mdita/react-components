import React, { Component } from 'react';

const styles = {
  li: {
    display: flex;
  },
  leftWall: color => {
    width: "0.5em",
    backgroundColor: color
  }
}

export default class ListItems extends Component {
  const { completed } = this.props;
  render() {
    return(
      <li style={styles.li}>
        <div style={styles.leftWall(completed ? 'green' : 'red')}>
          {/* //HERE IS THE BODY */}
        </div>
      </li>
    );
  }
}
