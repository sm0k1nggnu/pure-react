import React from 'react';
import logo from './logo.svg';
import './App.css';

function ErrorBox({ children }) {
  return (
    <div className="alert alert-danger error-box">
      <i className="fa fa-exclamation-triangle"/>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ErrorBox children={"Something has gone wrong"}></ErrorBox>
    </div>
  );
}

export default App;
