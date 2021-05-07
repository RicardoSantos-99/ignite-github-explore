import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    if (counter > 0) setCounter(counter - 1);
  }

  function clear() {
    setCounter(0) // imutabilidade
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>

      <button type="button" onClick={decrement}>
        Decrement
      </button>

      <button type="button" onClick={clear}>
        Clear
      </button>
    </div>
  )
};
