import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MoviePreview from "../components/AboutMovie/MoviePreview";
//consts
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//styles
import s from "../styles/AboutMovie.module.scss";

export default function AboutMovie() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  //state
  const [aboutFilm, setAboutFilm] = useState(null);
  useEffect(() => {
    fetch(`${searchAPI}movie/${movieId}?api_key=${key}`)
      .then(res => res.json())
      .then(results => setAboutFilm(results));
  }, [movieId]);

  return (
    <div className={s.about_movie}>
      <div className={s.about_movie_back}>
        <img
          onClick={() => navigate(-1)}
          className={s.about_movie_back_btn}
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
        />
        <h3 className={s.about_movie_back_title}>{aboutFilm?.title}</h3>
      </div>
      <MoviePreview aboutFilm={aboutFilm} />
    </div>
  );
}
