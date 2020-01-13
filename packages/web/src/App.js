import React from 'react';
import { useCounter } from '@demo/shared'
import './App.css';


const App = () => {
  const { counter, increment, decrement } = useCounter()
  return (
    <div className="App">
      <span className="Title">React<span className="Subtitle">Monorepo</span></span>

      <div className="Content">
        <span className="Counter">{counter}</span>
      </div>
      <div className="Footer">
        <button className="Button" onClick={increment}>increment</button>
        <button className="Button" onClick={decrement}>decrement</button>
      </div>
    </div>
  );
}

export default App;
