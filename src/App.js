import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(2)

    function decrementCount () {
        setCount(prevCount => prevCount - 1)

    }
    function incrementCount () {
        setCount(count + 1)

    }
  return (
    <div>
     <button onClick = {decrementCount}>-</button>
     <span>{count}</span>
     <button onClick = {incrementCount}>+</button>
    </div>
  );
}

export default App;
