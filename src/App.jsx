import React, { Component } from 'react';
import ListItems from './ListItems';
import './App.css';
import _ from 'lodash';

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

  handleOnClick = id => {
    const topics = _.cloneDeep(this.state.topics);

    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        topics[i].completed = !topics[i].completed;
        break;
      }
    }

    this.setState({ topics: topics })
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <h1>Topics</h1>
        <ul>
          {topics.map(topic => (
            <ListItems
              key={topic.id}
              id= {topic.id}
              name={topic.name}
              description={topic.description}
              completed={topic.completed}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </ul>
      </div>
    )
  };
}

export default App;
