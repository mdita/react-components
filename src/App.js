import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // fake data that should be provided by a service

    this.state = {
      topics: [
        {
          id: 1,
          name: "Topic 1",
          description: "This is our first topic",
          completed: true
        },
        {
          id: 2,
          name: "Topic 2",
          description: "This is our second topic",
          completed: false
        },
        {
          id: 3,
          name: "Topic 3",
          description: "This is our third topic",
          completed: true
        }
      ]
    }
  }
  render() {
    const { topics } = this.state;
    return <div className="App">
        Hello World
        {JSON.stringify(topics)}
      </div>
  };
}

export default App;
