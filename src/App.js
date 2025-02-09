// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const crescator = () => {
    setCount(prevCount => prevCount + 1);
  };

  const descrescator = () => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <div id="counter" className={count > 0 ? 'green' : count < 0 ? 'red' : ''}>
        {count}
      </div>
      <button onClick={crescator}>Crescator</button>
      <button onClick={descrescator}>Descrescator</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
