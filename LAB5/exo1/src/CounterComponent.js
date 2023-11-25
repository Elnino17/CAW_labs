// CounterComponent.js
import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Inc</button>
      <button onClick={handleDecrement}>Dec</button>
    </div>
  );
};

export default CounterComponent;
