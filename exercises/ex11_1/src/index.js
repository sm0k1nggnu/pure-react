import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function onOff(value) {
  const text = value ? 'on' : 'off';
  return <span className={text}>{text}</span>;
}

class House extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingroom: true,
    bedroom: false
  }

  toggle = (room) => {
    this.setState(prevState => ({
    [room]: !prevState[room]
    }))
  }

  lightsOut = () => {
    this.setState({
      kitchen: false,
      bathroom: false,
      livingroom: false,
      bedroom: false
    })
  }

  render() {
    const {
      kitchen,
      bathroom,
      livingroom,
      bedroom
    } = this.state;
    return(
      <div>
        Kitchen lights: {onOff(kitchen)}
        <button onClick={() => this.toggle('kitchen')}>
          Kitchen
        </button><br/>
        ---<br/>
        bathroom lights: {onOff(bathroom)}
        <button onClick={() => this.toggle('bathroom')}>
          bathroom
        </button><br/>
        ---<br/>
        livingroom lights: {onOff(livingroom)}
        <button onClick={() => this.toggle('livingroom')}>
          livingroom
        </button><br/>
        ---<br/>
        bedroom lights: {onOff(bedroom)}
        <button onClick={() => this.toggle('bedroom')}>
          bedroom
        </button><br/>
        <button onClick={() => this.lightsOut()}>all lights off</button>
      </div>
    )
  }
}

const Page = () => (
  <div>
    <House/>
  </div>
)

ReactDOM.render(<Page/>, document.querySelector('#root'));