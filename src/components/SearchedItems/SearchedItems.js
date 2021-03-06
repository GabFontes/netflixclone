import React, { useContext } from 'react'
import './searchedItems.css'
import moviesContext from '../../context/MoviesContext';

export function SearchedItems({ items }) {
  const { searchTerm, setEnableInput } = useContext(moviesContext);
  window.onload = () => setEnableInput(true);

  let allItems = [];

  items.forEach(({ poster_path, title, original_name }) => {
    if (title) {
      allItems.push({ url: poster_path, name: title })
    } else {
      allItems.push({ url: poster_path, name: original_name })
    }
  })

  if (searchTerm !== '') {
    allItems = allItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <div className="searched-container">
      <h2 className="searched-title">Resultados para: {searchTerm}</h2>
      <div className="searched-results">
        {allItems.length > 0 && allItems.map(({ url, name }, key) => (
          <div key={key} className="searched-item">
            <img className="searched-item-img"
              src={`https://image.tmdb.org/t/p/w300${url}`}
              alt={name}
            />
          </div>
        ))}
      </div>
    </div>
  )
};
