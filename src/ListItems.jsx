import React, { Component } from 'react';
import ListBody from './ListBody';

const styles = {
  li: {
    display: "flex"
  },
  leftWall: color => ({
    width: "0.5em",
    backgroundColor: color
  })
}

export default class ListItems extends Component {
  render() {
    const { completed, name, description, id } = this.props;
    return(
      <li style={styles.li} onClick={() => this.props.handleOnClick(id)}>
        <div style={styles.leftWall(completed ? 'green' : 'red')}>
            <ListBody name={name} description={description}/>
        </div>
      </li>
    );
  }
}
