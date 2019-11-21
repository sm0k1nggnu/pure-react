import React from 'react';
import logo from './logo.svg';
import './App.css';

function Creditcard({card}) {
  const { bankName, cardNumber, expirationDate, name } = card;
  return (
    <div className="credit-card">
      <div className="bank-name">{bankName}</div>
      <div className="card-number">{cardNumber}</div>
      <div className="first-four-digits">{cardNumber.substring(0, 4)}</div>
      <div className="expiration">
        <span className="valid-thru">Valid Thru</span> {expirationDate}
      </div>
      <div className="name">{name}</div>
    </div>
  )
}

const cardInfo = {
  bankName: "Big Bank, Inc.",
  cardNumber: "1234 5678 8765 4321",
  expirationDate: "8/19",
  name: "Cardholder Name"
}

function App() {
  return (
    <div className="App">
      <Creditcard card={ cardInfo } />
    </div>
  );
}

export default App;
