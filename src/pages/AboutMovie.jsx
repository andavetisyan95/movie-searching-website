import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//components
import Loading from "../components/Loading";
import MoviePreview from "../components/AboutMovie/MoviePreview";
import PagesHeder from "../components/PagesHeder";
//consts
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//styles
import s from "../styles/AboutMovie.module.scss";

export default function AboutMovie() {
  const { movieId } = useParams();
  //state
  const [aboutFilm, setAboutFilm] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`${searchAPI}movie/${movieId}?api_key=${key}`)
      .then(res => res.json())
      .then(results => {
        setAboutFilm(results);
        setLoading(true);
      });
  }, []);

  return (
    <div className={s.about_movie}>
      <PagesHeder movieTitle={aboutFilm?.title} />
      {loading ? <MoviePreview aboutFilm={aboutFilm} /> : <Loading />}
    </div>
  );
}
