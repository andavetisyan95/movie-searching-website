//react hooks
import React, { useState, useEffect, memo } from "react";
import { useLocation } from "react-router";

import { Link } from "react-router-dom";
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//components
import Loading from "../components/Loading";
//images
import noImg from "../public/images/noImg.jpg";
//styles
import s from "../styles/SearchResult.module.scss";
import PagesHeder from "../components/PagesHeder";

export default memo(function SearchResult() {
  //get query param with useLocation
  const location = useLocation();
  const movieTitle = location.search.split("?")[1].split("=")[1];

  //states
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${searchAPI}search/movie?api_key=${key}&query=${movieTitle}`)
      .then(res => res.json())
      .then(results => {
        setMovies(results.results);
        setLoading(true);
      });
  }, [movieTitle]);

  return (
    <div>
      <PagesHeder movieTitle={movieTitle} />
      <div className={s.movie_result}>
        {loading ? (
          movies.map(({ id, title, poster_path }) => (
            <Link to={`/aboutMovie?movie_title=${movieTitle}&film_id=${id}`} key={id} className={s.movie_result_card}>
              <img className={s.movie_result_card_img} src={poster_path ? imgAPI + poster_path : noImg} alt="filmPoster" />
              <h3 className={s.movie_result_card_title}>{title}</h3>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
});
