import React from 'react';
import logo from './logo.svg';
import './App.css';

function Poster({ posterData }) {
  const { image, title, text } = posterData
  return (
    <div className="poster">
      <div className="image-container">
        <img alt="Poster" src={image}/>
      </div>
      <div className="title">
        <span className="first-letter">
          {title.substring(0,1)}
        </span>
        <span className="center">
          {title.substring(1, title.length - 1)}
        </span>
        <span className="last-letter">
          {title.substring(title.length - 1)}
        </span>
      </div>
      <div className="caption">{text}</div>
    </div>
  )
}

const posterDetails = {
  image: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
  title: "React",
  text: "The best thing since jQuery",
}

function App() {
  return (
    <div className="App">
      <Poster posterData={ posterDetails }/>
    </div>
  );
}

export default App;
