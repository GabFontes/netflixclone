import React from 'react';
import './Header.css';

export const Header = ({ black }) => {

  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt="Netflix Logo" />
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Icon" />
        </a>
      </div>
    </header>
  )
}