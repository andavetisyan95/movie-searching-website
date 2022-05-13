import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
//consts
import { searchAPI, key } from "../helpers/consts";
//styles
import s from "../styles/SearchResult.module.scss";

export default function SearchResult() {
  //react hooks
  const location = useLocation();
  const navigate = useNavigate();

  const movie_name = location.pathname.split("/")[2];

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${searchAPI}search/movie?api_key=${key}&query=${movie_name}`)
      .then(res => res.json())
      .then(results => setMovies(results));
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
        <h3 className={s.search_result_back_title}>{movie_name}</h3>
      </div>
      <div className={s.movie_result}></div>
    </div>
  );
}
