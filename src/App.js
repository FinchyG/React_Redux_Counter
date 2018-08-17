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

class App extends Component {

    render() {
      return (
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <p id="show_count">0</p>
        </div>
      )
    }
}

export default App;