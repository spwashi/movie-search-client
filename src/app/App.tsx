import React from 'react';
import logo from '../assets/ABR-Logo-Horizontal.png';
import './styles/App.scss';

function App() {
  return (
    <main>
      <header>
        <a href="https://theabr.org" title="The American Board of Radiology">
          <img src={logo} className="logo" alt="ABR logo"/></a>
      </header>
    </main>
  );
}

export default App;
