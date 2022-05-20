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
      {videos.length !== 0 ? (
        videos.map(({ id, key }) => (
          <div onClick={handleShowModal} key={id} className={s.movie_trailers_cont}>
            <iframe className={s.movie_trailers_cont_video} src={videoAPI + key}></iframe>
          </div>
        ))
      ) : (
        <div className={s.noInfo}>
          <p className={s.noInfo_p}>There is no trailer to show</p>
        </div>
      )}
      {showPopUp && <TrailerPopUp onClose={handleCloseModal} />}
    </div>
  );
}
