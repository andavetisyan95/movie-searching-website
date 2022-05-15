import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MoviePreview from "../components/AboutMovie/MoviePreview";
import PagesHeder from "../components/PagesHeder";
//consts
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//styles
import s from "../styles/AboutMovie.module.scss";

export default function AboutMovie() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  //state
  const [aboutFilm, setAboutFilm] = useState();
  useEffect(() => {
    fetch(`${searchAPI}movie/${movieId}?api_key=${key}`)
      .then(res => res.json())
      .then(results => setAboutFilm(results));
  }, []);

  return (
    <div className={s.about_movie}>
      <PagesHeder movieTitle={aboutFilm?.title} />
      <MoviePreview aboutFilm={aboutFilm} />
    </div>
  );
}
