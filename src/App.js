import React, { Component } from 'react';
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => {
  let count = store.getState();
  console.log(count);
});

function increment() {
  store.dispatch({type: "INCREMENT"});
}

function decrement() {
  store.dispatch({type: "DECREMENT"});
}

export default class App extends Component {
  render() {
    return (
      <div>
        React counter
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>0</p>
      </div>
    )
  }
}