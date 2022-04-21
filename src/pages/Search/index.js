import React, { useState, useEffect } from 'react'
import { getHomeList } from '../../apis';
import { Header, SearchedItems } from '../../components'
import './searchPage.css'

export default function Search() {

  const [movieList, setMovieList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  let allItems = [];

  useEffect(() => {
    (async () => {
      const list = await getHomeList();
      list.forEach(({ items }) => items.results.forEach((item) => allItems.push(item)))
      setMovieList(allItems);
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
    <div>
      <Header black={blackHeader} />
      <SearchedItems items={movieList} />
    </div>
  )
};
