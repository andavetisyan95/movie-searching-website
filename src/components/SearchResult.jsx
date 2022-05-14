import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//components
import Loading from "./Loading";
//images
import noImg from "../public/images/noImg.jpg";
//styles
import s from "../styles/SearchResult.module.scss";

export default function SearchResult() {
  //react hooks
  const navigate = useNavigate();
  //params
  const { movieTitle } = useParams();
  //states
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${searchAPI}search/movie?api_key=${key}&query=${movieTitle}`)
      .then(res => res.json())
      .then(results => setMovies(results.results));

    setLoading(true);
  }, [movieTitle]);

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
        {movies &&
          (loading ? (
            movies.map(elem => {
              return (
                <Link to={`/aboutMovie/${elem.id}`} key={elem.id} className={s.movie_result_card}>
                  <img
                    className={s.movie_result_card_img}
                    src={elem.poster_path ? imgAPI + elem.poster_path : noImg}
                    alt="filmPoster"
                  />
                  <h3 className={s.movie_result_card_title}>{elem.title}</h3>
                </Link>
              );
            })
          ) : (
            <Loading />
          ))}
      </div>
    </div>
  );
}
