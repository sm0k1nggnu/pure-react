import React from 'react';
import logo from './logo.svg';
import './App.css';

function AddressLabel({ mailingLabel }) {
  const { fullname, address, city, state, zip } = mailingLabel
  return (
    <div className="mailingLabel">
      <div className="name">{fullname}</div>
      <div className="address">{address}</div>
      <div className="address2">{city}, {state} {zip}</div>
    </div>
  );
}

const label = {
  fullname: 'Full Name',
  address: '123 Fake St.',
  city: 'Boston',
  state: 'MA',
  zip: '02118',
}

function App() {
  return (
    <div className="App">
      <AddressLabel mailingLabel={ label }/>
    </div>
  );
}

export default App;
