import React from "react";
// constants
import { imgAPI } from "../../helpers/consts";
//styles
import s from "../../styles/AboutMovie.module.scss";

import noImg from "../../public/images/noImg.jpg";

export default function MoviePreview({ aboutFilm }) {
  return (
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
  );
}
