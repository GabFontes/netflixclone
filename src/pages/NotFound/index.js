import React from 'react';
import dangerIcon from '../../icons/cuidado.png';
import progressIcon from '../../icons/workinprogress.png';
import './notFound.css'

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound-board">
        <div className="notFound-icons">
          <img src={dangerIcon} width={300} alt="ícone de perigo" />
          <img src={progressIcon} width={300} alt="ícone de construção em progresso" />
          <img src={dangerIcon} width={300} alt="ícone de perigo" />
        </div>
        <h2 className="notFound-title">Esta página ainda está em desenvolvimento</h2>
      </div>
    </div>
  )
}
