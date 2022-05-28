import React, { useCallback, useState } from "react";
//components
import TrailerPopUp from "../Modals/TrailerPopUp";

//styles
import s from "../../styles/Trailers.module.scss";

export default function MovieTrailers({ movieTrailers }) {
  const videos = movieTrailers?.results;
  //state
  const [showPopUp, setShowPopUp] = useState(false);
  const [movieKey, setMovieKey] = useState(null);
  //envs
  const { REACT_APP_VIDEO_API } = process.env;

  const handleShowModal = useCallback(key => {
    setShowPopUp(true);
    setMovieKey(key);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowPopUp(false);
    setMovieKey(null);
  }, []);
  return (
    <div className={s.movie_trailers}>
      {videos.length !== 0 ? (
        videos.map(({ id, key, name }) => (
          <div onClick={() => handleShowModal(key)} key={id} className={s.movie_trailers_cont}>
            <iframe title={name} className={s.movie_trailers_cont_video} src={REACT_APP_VIDEO_API + key}></iframe>
          </div>
        ))
      ) : (
        <div className={s.noInfo}>
          <p className={s.noInfo_p}>There is no trailer to show</p>
        </div>
      )}
      {showPopUp && <TrailerPopUp onClose={handleCloseModal} movieKey={movieKey} />}
    </div>
  );
}
