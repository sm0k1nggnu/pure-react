import React from 'react';
import ReactDOM from 'react-dom';

function Child({ onAction, reset }) { return (
  <div>
    <button onClick={onAction}> Click Me!</button>
    <button onClick={reset}> Reset Counter</button>
  </div>
  ); }

class CountingParent extends React.Component {
  // constructor called when component created
  state = {
      actionCount: 0
  }

  handleAction = (action) => { //arrow function so no bind necessary
    console.log('Child says', action)
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }
  reset(action) {
    console.log('reseted', action)
    this.setState({
      actionCount: 0
    })
  }

  render() {
    return(
      <div>
        <Child onAction={this.handleAction} reset={this.reset}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    )
  }
}

const Page = () => (
  <div>
    <CountingParent/>
    <CountingParent/>
    <CountingParent/>
  </div>
)

ReactDOM.render(<Page/>, document.querySelector('#root'));

// export { FileList, testFiles };  // for testing
