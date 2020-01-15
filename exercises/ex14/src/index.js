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
const AudioControls = () => {
  const [volume, setVolume] = useState(0)
  const [bass, setBass] = useState(0)
  const [mid, setMid] = useState(0)
  const [treble, setTreble] = useState(0)
  return (
    <div>
      <div>{volume}<br />Volume</div>
      <div>{treble}<br />Treble</div>
      <div>{mid}<br />Mid</div>
      <div>{bass}<br />Bass</div>
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