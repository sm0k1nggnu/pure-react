import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Child({ onAction, reset }) {
//   return (
//   <div>
//     <button onClick={onAction}> Click Me!</button>
//     <button onClick={reset}> Reset Counter</button>
//   </div>
//   );
// }

function onOff(value) {
  const text = value ? 'on' : 'off';
  return <span className={text}>{text}</span>;
}

// class CountingParent extends React.Component {
//   // constructor called when component created
//   state = {
//       actionCount: 0
//   }

//   handleAction = (action) => { //arrow function so no bind necessary
//     console.log('Child says', action)
//     this.setState({
//       actionCount: this.state.actionCount + 1
//     });
//   }
//   reset(action) {
//     console.log('reseted', action)
//     this.setState({
//       actionCount: 0
//     })
//   }

//   render() {
//     return(
//       <div>
//         <Child onAction={this.handleAction} reset={this.reset}/>
//         <p>Clicked {this.state.actionCount} times</p>
//       </div>
//     )
//   }
// }

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