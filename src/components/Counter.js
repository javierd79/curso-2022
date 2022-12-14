import React, { useState } from 'react'
import '../assets/styles/Counter.css'

function Counter () {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(0)
  return (
    <div className='card'>
      <p className='counter-state'>El estado <code>value</code> vale actualmente: {value}</p>
      <div className='buttons'>
        <button
          className='button-counter minus'
          onClick={() => setValue(value - 1)}
        >
          -
        </button>
        <button
          className='button-counter reset'
          onClick={() => setValue(0)}
        >
          Reset
        </button>
        <button
          className='button-counter plus'
          onClick={() => setValue(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
