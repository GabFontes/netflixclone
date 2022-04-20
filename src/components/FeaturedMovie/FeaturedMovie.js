import React from 'react';
import './FeaturedMovie.css';

export const FeaturedMovie = ({ item }) => {
  console.log(item);
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  item.genres.forEach((gen) => genres.push(gen.name))

  return (
    <section className="featuredmovie"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}>
      <div className="featured-vertical-transparency">
        <div className="featured-horizontal-transparency">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-average">{item.vote_average} pontos</div>
            <div className="featured-release">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featured-description">{item.overview}</div>
          <div className="featured-buttons">
            <a className="featured-watchbutton" href={`/watch/${item.id}`}>‣ Assistir</a>
            <a className="featured-addbutton" href={`/list/add${item.id}`}>+ Minha Lista </a>
          </div>
          <div className="featured-genres"><strong>Gêneros: {genres.join(', ')}</strong>... </div>
        </div>
      </div>
    </section >
  )
}