import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
//components
import Loading from "../components/Loading";
import MoviePreview from "../components/AboutMovie/MoviePreview";
import MovieActors from "../components/AboutMovie/MovieActors";
import PagesHeder from "../components/PagesHeder";

//consts
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//styles
import s from "../styles/AboutMovie.module.scss";

export default function AboutMovie() {
  const { movieId } = useParams();
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
      {loading ? <MoviePreview aboutFilm={movieInfo?.aboutFilm} /> : <Loading />}
      {loading ? <MovieActors actors={movieInfo?.actors} /> : <Loading />}
    </div>
  );
}
