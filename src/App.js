import React, { useEffect, useState } from 'react';
import { getHomeList, getMovieInfo } from './apis';
import { MovieRow, FeaturedMovie } from './components'
import './App.css'

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    (async () => {
      let list = await getHomeList();
      setMovieList(list);
      let originals = list.filter((item) => item.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo);
    })();
  }, []);

  return (
    <div className="initialPage">
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map(({ title, items }, key) => (
          <MovieRow key={key} title={title} items={items} />
        ))}
      </section>
    </div>
  )
};