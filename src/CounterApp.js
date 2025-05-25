import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Decide the color based on the count
  const counterColor = count > 0 ? 'green' : count === 0 ? 'red' : 'black';

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React Counter App</h1>

      {/* Apply dynamic color */}
      <h2 style={{ color: counterColor }}>{count}</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={increment}>➕ Increment</button>

        {/* Disable if count is 0 */}
        <button onClick={decrement} disabled={count === 0}>
          ➖ Decrement
        </button>

        <button onClick={reset}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
