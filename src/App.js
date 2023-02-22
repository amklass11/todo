import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/todo';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />

      </div>
    );
  }
}

export default App;
