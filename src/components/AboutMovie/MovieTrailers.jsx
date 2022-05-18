import React from "react";
//consts
import { videoAPI } from "../../helpers/consts";

//styles
import s from "../../styles/Trailers.module.scss";

export default function MovieTrailers({ movieTrailers }) {
  const videos = movieTrailers?.results;

  return (
    <div className={s.movie_trailers}>
      {videos.map(video => (
        <div key={video.id} className={s.movie_trailers_cont}>
          <iframe className={s.movie_trailers_cont_video} src={videoAPI + video.key}></iframe>
        </div>
      ))}
    </div>
  );
}
