import React, { useContext } from 'react';
import './Header.css';
import moviesContext from '../../context/MoviesContext';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export const Header = ({ black }) => {

  const navigate = useNavigate();

  const { searchTerm, setSearchTerm, enableInput, setEnableInput } = useContext(moviesContext);

  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img
            onClick={() => navigate('/')}
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt="Netflix Logo" />
        </a>
      </div>
      <div className="header-user">
        <div className={enableInput ? "header-search-body" : ''}>
          <SearchIcon className="search-icon"
            onClick={() => setEnableInput(!enableInput)}
            style={{ fontSize: 30 }}
          />
          {enableInput &&
            <input
              autoFocus
              type="text"
              id="movieSearch"
              placeholder="Buscar por filmes e séries"
              value={searchTerm}
              onChange={({ target: { value } }) => {
                setSearchTerm(value); navigate('/search');
              }}
            />
          }
        </div>
        <a className="user-icon" href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Icon" />
        </a>
      </div>
    </header>
  )
}