import React from "react";
//constants
import { imgAPI } from "../../helpers/consts";
//images
import noImg from "../../public/images/noImg.jpg";
//styles
import s from "../../styles/Actors.module.scss";

export default function MovieActors({ actors }) {
  const actorsNames = actors?.cast;
  return (
    <div className={s.movie_actors}>
      {actorsNames?.map(element => (
        <div className={s.movie_actors_cont}>
          <img
            className={s.movie_actors_cont_img}
            src={element.profile_path ? imgAPI + element.profile_path : noImg}
            alt="actors_img"
          />
          <div className={s.movie_actors_cont_div}>
            <p className={s.movie_actors_cont_div_name}>{element.name}</p>
            <p className={s.movie_actors_cont_div_char}>{element.character}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
