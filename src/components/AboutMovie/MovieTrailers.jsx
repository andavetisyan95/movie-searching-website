import React, { useState } from "react";
//components
import TrailerPopUp from "../Modals/TrailerPopUp";
//consts
import { videoAPI } from "../../helpers/consts";
//styles
import s from "../../styles/Trailers.module.scss";

export default function MovieTrailers({ movieTrailers }) {
  const videos = movieTrailers?.results;
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowModal = () => {
    setShowPopUp(true);
  };
  const handleCloseModal = () => {
    setShowPopUp(false);
  };
  return (
    <div className={s.movie_trailers}>
      {videos.map(video => (
        <div onClick={handleShowModal} key={video.id} className={s.movie_trailers_cont}>
          <iframe className={s.movie_trailers_cont_video} src={videoAPI + video.key}></iframe>
        </div>
      ))}
      {showPopUp && <TrailerPopUp onClose={handleCloseModal} />}
    </div>
  );
}
