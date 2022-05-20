import React from "react";
import { memo } from "react";

//styles
import s from "../../styles/AboutMovie.module.scss";

import noImg from "../../public/images/noImg.jpg";

export default memo(function MoviePreview({ aboutFilm }) {
  //env
  const { REACT_APP_IMG_API } = process.env;

  return (
    <div className={s.about_movie_cont}>
      <div className={s.about_movie_cont_div}>
        <img
          className={s.about_movie_cont_div_img}
          src={aboutFilm.poster_path ? REACT_APP_IMG_API + aboutFilm.poster_path : noImg}
          alt="filmPoster"
        />
        <div className={s.about_movie_cont_div_div}>
          <div className={s.about_movie_cont_div_div_title}>{aboutFilm.title}</div>
          <div className={s.about_movie_cont_div_div_text}>
            {aboutFilm.overview ? aboutFilm.overview : "There is nothing about movie overview."}
          </div>
        </div>
      </div>
    </div>
  );
});
