import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

export const Header = ({ black }) => {

  const [disable, setDisable] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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
        {disable && <input
          placeholder="Buscar por filmes e séries"
          onChange={({ target: { value } }) => setSearchTerm(value)}
          type="text"
        />}
        <SearchIcon className="header-search" onClick={() => setDisable(!disable)} style={{ fontSize: 35 }} />
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Icon" />
        </a>
      </div>
    </header>
  )
}