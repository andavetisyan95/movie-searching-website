import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//styles
import s from "../styles/SearchResult.module.scss";

export default function SearchResult() {
  //react hooks
  const navigate = useNavigate();

  const { movieTitle } = useParams();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${searchAPI}search/movie?api_key=${key}&query=${movieTitle}`)
      .then(res => res.json())
      .then(results => setMovies(results.results));
  }, []);
  console.log(movies);
  return (
    <div>
      <div className={s.search_result_back}>
        <img
          onClick={() => navigate(-1)}
          className={s.search_result_back_btn}
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
          alt="back_btn"
        />
        <h3 className={s.search_result_back_title}>{movieTitle}</h3>
      </div>
      <div className={s.movie_result}>
        {movies.map(elem => {
          return (
            <div className={s.movie_result_card}>
              <img className={s.movie_result_card_img} src={imgAPI + elem.poster_path} alt="filmPoster" />
              <h3 className={s.movie_result_card_title}>{elem.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
