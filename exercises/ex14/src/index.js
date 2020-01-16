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

const AudioControlsWithOneObject = () => {
  const [{volume, bass, treble, mid}, setValues] = useState({
    volume: 12,
    bass: 13,
    treble: 84,
    mid: 39
  });

  const increase = key => () => {
    setValues(values => ({
      ...values,
      [key]: values[key] + 1
    }));
  }

  const decrease = key => () => {
    setValues(values => ({
      ...values,
      [key]: values[key] - 1
    }));
  }
  return (
    <div className="audio-controls">
      <Control
        value={volume}
        onIncrease={increase('volume')}
        onDecrease={decrease('volume')}
      >Volume</Control>
      <Control
        value={bass}
        onIncrease={increase('bass')}
        onDecrease={decrease('bass')}
      >bass</Control>
      <Control
        value={treble}
        onIncrease={increase('treble')}
        onDecrease={decrease('treble')}
      >treble</Control>
      <Control
        value={mid}
        onIncrease={increase('mid')}
        onDecrease={decrease('mid')}
      >mid</Control>
    </div>
  )
}

//16

const InputExample = () => {
  const [text, setText] = useState('');

  const changeHandler = event => {
    setText(event.target.value);
  }

  return (
    <div>
    <input
      type="text"
      value={text}
      onChange={changeHandler}
    />
    {text}
    </div>
  )
}



ReactDOM.render(
  <>
  <Room />
  <RandomList />
  <AudioControls />
  <AudioControlsWithOneObject />
  <InputExample />
  </>,
  document.querySelector('#root')
)