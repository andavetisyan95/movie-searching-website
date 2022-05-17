import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router";
//components
import Loading from "../components/Loading";
import MoviePreview from "../components/AboutMovie/MoviePreview";
import MovieActors from "../components/AboutMovie/MovieActors";
import PagesHeder from "../components/PagesHeder";
import MovieTrailers from "../components/AboutMovie/MovieTrailers";

//consts
//consts
import { searchAPI, key } from "../helpers/consts";
//styles
import s from "../styles/AboutMovie.module.scss";

export default function AboutMovie() {
  const location = useLocation();
  const movieId = location.search.split("?")[1].split("=")[2];
  //state
  // const [aboutFilm, setAboutFilm] = useState([]);
  // const [actors, setActors] = useState([]);
  // const [movieTrailers, setMovieTrailers] = useState([]);
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    fetchAllInfo();
  }, []);

  async function fetchAllInfo() {
    const [aboutFilm, actors, movieTrailers] = await Promise.all([
      fetch(`${searchAPI}movie/${movieId}?api_key=${key}`).then(res => res.json()),
      fetch(`${searchAPI}movie/${movieId}/credits?api_key=${key}`).then(res => res.json()),
      fetch(`${searchAPI}movie/${movieId}/videos?api_key=${key}`).then(res => res.json())
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
}
