import React, { Component } from 'react';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch(action.type) {
    case "ADD-ONE":
      return state + 1;
    case "SUBTRACT-ONE":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

class App extends Component {

  constructor() {
    super();
    store.subscribe(() => {
      console.log(store.getState);
    });
  }

  increment() {
    store.dispatch({type: "ADD-ONE", data: "added one" });
  }

  decrement() {
    store.dispatch({type: "SUBTRACT-ONE", data: "subtracted one"});
  }
  
  render() {
    return (
      <div>
        <div>Simple Redux Counter</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>{counter}</p>
      </div>
    );
  }
}

export default App;