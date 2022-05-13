import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
//consts
//consts
import { searchAPI, key, imgAPI } from "../helpers/consts";
//images
import noImg from "../public/images/noImg.jpg";
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
  }, []);
  console.log(aboutFilm);
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
      <div className={s.about_movie_cont}>
        <div className={s.about_movie_cont_div}>
          <img
            className={s.about_movie_cont_div_img}
            src={aboutFilm?.poster_path ? imgAPI + aboutFilm?.poster_path : noImg}
            alt="filmPoster"
          />
          <div className={s.about_movie_cont_div_div}>
            <div className={s.about_movie_cont_div_div_title}>{aboutFilm?.title}</div>
            <div className={s.about_movie_cont_div_div_text}>{aboutFilm?.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
