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
      {actorsNames.length !== 0 ? (
        actorsNames?.map(({ id, profile_path, name, character }) => (
          <div key={id} className={s.movie_actors_cont}>
            <img className={s.movie_actors_cont_img} src={profile_path ? imgAPI + profile_path : noImg} alt="actors_img" />
            <div className={s.movie_actors_cont_div}>
              <p className={s.movie_actors_cont_div_name}>{name}</p>
              <p className={s.movie_actors_cont_div_char}>{character}</p>
            </div>
          </div>
        ))
      ) : (
        <div className={s.noInfo}>
          <p className={s.noInfo_p}>There is no info to show</p>
        </div>
      )}
    </div>
  );
}
