//react hooks
import React, { useState, useEffect, memo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
//components
import Loading from "../components/Loading";
//images
import noImg from "../public/images/noImg.jpg";
//styles
import s from "../styles/SearchResult.module.scss";
import PagesHeder from "../components/PagesHeder";

export default memo(
  function SearchResult() {
    //get query param with useLocation
    const location = useLocation();
    const movieTitle = location.search.split("?")[1].split("=")[1];

    //envs
    const { REACT_APP_API_SEARCH, REACT_APP_IMG_API } = process.env;

    //states
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      fetch(`${REACT_APP_API_SEARCH}${movieTitle}`)
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
                <img
                  className={s.movie_result_card_img}
                  src={poster_path ? REACT_APP_IMG_API + poster_path : noImg}
                  alt="filmPoster"
                />
                <h3 className={s.movie_result_card_title}>{title}</h3>
              </Link>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.movieTitle !== nextProps.movieTitle) return false;
    return true;
  }
);
