import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LabelledInput extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { firstName, lastName } = this.state;
  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={this.changeHandler}
        label="firstName"
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={this.changeHandler}
        label="lastName"
      />
      Hello {firstName} {lastName}!
    </div>
  )}
}

ReactDOM.render(
  <LabelledInput />,
  document.querySelector('#root')
)