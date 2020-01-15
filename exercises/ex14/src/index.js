import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//ex 14.1
const Room = () => {
  const [isLightOn, setLight] = useState(true);

  const lightedness = isLightOn ? 'lit' : 'dark';

  const flipLight = () => {
    setLight(!isLightOn)
  }
  return (
    <div className={`room ${lightedness}`}>
    the room is {lightedness}
    <br />
      <button onClick={flipLight} >flip</button>
    </div>
  )
}

//ex 14.2
const RandomList = () => {
  const [randomNo, setRandomNo] = useState([])

  const generateRandomNumber = () => {
    let rnd = Math.random()*100;
    setRandomNo(nums => [...randomNo, rnd])
  }

  return (
    <div>
      <button onClick={generateRandomNumber}>generate random number</button>
      <ul>
      { randomNo.map((rn, index) => (
        <li key={index}>{ rn }</li>
      ))}
      </ul>
    </div>
  )
}

//ex 14.3
const Control = ({
  value,
  Children,
  onIncrease,
  onDecrease
}) => (
  <div className="control">
    <button onClick={onDecrease}>-</button>
    <div>
      <span>{value}</span>
      <span>{Children}</span>
    </div>
    <button onClick={onIncrease}>+</button>
  </div>
)



const AudioControls = () => {
  const [volume, setVolume] = useState(28)
  const [bass, setBass] = useState(84)
  const [mid, setMid] = useState(23)
  const [treble, setTreble] = useState(7)

  // const changeVolume = (direction) => {
  //   setVolume(volume = volume direction === 'up' ? + : -} 1)

  return (
    <div className="audio-controls">
      <Control
        value={volume}
        onIncrease={() => setVolume(volume+1) }
        onDecrease={() => setVolume(volume- 1)}
      >
        Volume
      </Control>
      <Control
        value={treble}
        onIncrease={() => setTreble(treble + 1)}
        onDecrease={() => setTreble(treble - 1)}
      >
        Treble
      </Control>
      <Control
        value={bass}
        onIncrease={() => setBass(bass + 1)}
        onDecrease={() => setBass(bass - 1)}
      >
        Volume
      </Control>
      <Control
        value={mid}
        onIncrease={() => setMid(mid + 1)}
        onDecrease={() => setMid(mid - 1)}
      >
        Volume
      </Control>
    </div>
  )
}



ReactDOM.render(
  <>
  <Room />
  <RandomList />
  <AudioControls />
  </>,
  document.querySelector('#root')
)