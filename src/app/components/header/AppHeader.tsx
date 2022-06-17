import logo from '../../../assets/ABR-Logo-Horizontal.png';
import React from 'react';

export function AppHeader() {
  return (
    <header>
      <a href="https://theabr.org" title="The American Board of Radiology">
        <img src={logo} className="logo" alt="ABR logo"/>
      </a>
    </header>
  );
}