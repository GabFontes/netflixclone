import React, { useEffect, useState } from 'react';
import { getHomeList, getMovieInfo } from './apis';
import { MovieRow, FeaturedMovie, Header } from './components'
import './App.css'

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    (async () => {
      const list = await getHomeList();
      setMovieList(list);
      const originals = list.filter((item) => item.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    })();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  })

  return (
    <div className="initialPage">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map(({ title, items }, key) => (
          < MovieRow key={key} title={title} items={items} />
        ))}
      </section>

      <footer>
        Aplicação feita por <a className="devname" href="https://www.linkedin.com/in/gabfontes/" target="_blank" rel="noreferrer">Gabriel Fontes</a><br />
        Direitos de imagens reservados para Netflix <br />
        Dados pegos do site <a className="themoviedb" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">themoviedb.org</a><br />
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }
    </div>
  )
};