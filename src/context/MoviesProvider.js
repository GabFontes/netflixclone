import React, { useState } from "react";
import moviesContext from './MoviesContext';


function MoviesProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [enableInput, setEnableInput] = useState(false);
  const contextValue = {
    searchTerm,
    setSearchTerm,
    enableInput,
    setEnableInput
  }

  return (
    <moviesContext.Provider value={contextValue}>
      {children}
    </moviesContext.Provider>
  )
}

export default MoviesProvider;
