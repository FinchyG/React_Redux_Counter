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
let count;

store.subscribe(() => {
  count = store.getState();
  document.getElementById("show_count").innerHTML = count;
});

function increment() {
  store.dispatch({type: "INCREMENT"});
}

function decrement() {
  store.dispatch({type: "DECREMENT"});
}

const App = () => {
    return (
      <div>
        React counter
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p id="show_count"></p>
      </div>
    )
}

export default App;