import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './Header.scss';

export default function AppHeader() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        Edit <code>src/components/app/app.js</code> and save to reload.
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
