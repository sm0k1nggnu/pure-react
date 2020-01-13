import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function StepTracker() {
  const [steps, setSteps] = useState(0)

  function increment() {
    setSteps(steps => steps + 1)
  }

  return (
    <div>
      Today you have taken { steps } steps
      <button onClick={increment}>A Step</button>
    </div>
  )
}

ReactDOM.render(
  <StepTracker />,
  document.querySelector('#root')
)