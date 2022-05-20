import React, { memo, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router";
//components
import Loading from "../components/Loading";
import MoviePreview from "../components/AboutMovie/MoviePreview";
import MovieActors from "../components/AboutMovie/MovieActors";
import PagesHeder from "../components/PagesHeder";
import MovieTrailers from "../components/AboutMovie/MovieTrailers";
//styles
import s from "../styles/AboutMovie.module.scss";

export default memo(function AboutMovie() {
  const location = useLocation();
  const movieId = location.search.split("?")[1].split("=")[2];
  //state
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  // envs
  const { REACT_APP_SEARCH_API, REACT_APP_PERSONAL_REQUEST_KEY } = process.env;

  useLayoutEffect(() => {
    fetchAllInfo();
  }, []);

  async function fetchAllInfo() {
    const [aboutFilm, actors, movieTrailers] = await Promise.all([
      fetch(`${REACT_APP_SEARCH_API}movie/${movieId}?${REACT_APP_PERSONAL_REQUEST_KEY}`).then(res => res.json()),
      fetch(`${REACT_APP_SEARCH_API}movie/${movieId}/credits?${REACT_APP_PERSONAL_REQUEST_KEY}`).then(res => res.json()),
      fetch(`${REACT_APP_SEARCH_API}movie/${movieId}/videos?${REACT_APP_PERSONAL_REQUEST_KEY}`).then(res => res.json())
    ]);
    setMovieInfo({
      aboutFilm,
      actors,
      movieTrailers
    });
    setLoading(true);
  }

  return (
    <div className={s.about_movie}>
      <PagesHeder movieTitle={movieInfo?.aboutFilm.title} />
      {loading ? (
        <>
          <MoviePreview aboutFilm={movieInfo?.aboutFilm} />
          <MovieActors actors={movieInfo?.actors} />
          <MovieTrailers movieTrailers={movieInfo?.movieTrailers} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
});

// const [aboutFilm, setAboutFilm] = useState([]);
// const [actors, setActors] = useState([]);
// const [movieTrailers, setMovieTrailers] = useState([]);
