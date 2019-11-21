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

const labelTo = {
  fullname: 'Receiver',
  address: '123 Fake St.',
  city: 'Boston',
  state: 'MA',
  zip: '02118',
}

const labelFrom = {
  fullname: 'Sender',
  address: '123 Fake St.',
  city: 'Boston',
  state: 'MA',
  zip: '02118',
}

function Envelope({}) {
  return (
    <div className="envelope">
      <span className="from">
        <AddressLabel mailingLabel={ labelFrom } />
      </span>
      <span className="to">
        <AddressLabel mailingLabel={ labelTo } />
      </span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Envelope toPerson={ labelTo } fromPerson={ labelFrom }/>
    </div>
  );
}

export default App;
