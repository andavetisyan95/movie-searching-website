import React, { useCallback, useState } from "react";
//components
import TrailerPopUp from "../Modals/TrailerPopUp";

//styles
import s from "../../styles/Trailers.module.scss";

export default function MovieTrailers({ movieTrailers }) {
  const videos = movieTrailers?.results;
  //state
  const [showPopUp, setShowPopUp] = useState(false);
  //envs
  const { REACT_APP_VIDEO_API } = process.env;

  const handleShowModal = useCallback(() => {
    setShowPopUp(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setShowPopUp(false);
  }, []);
  return (
    <div className={s.movie_trailers}>
      {videos.length !== 0 ? (
        videos.map(({ id, key }) => (
          <div onClick={handleShowModal} key={id} className={s.movie_trailers_cont}>
            <iframe className={s.movie_trailers_cont_video} src={REACT_APP_VIDEO_API + key}></iframe>
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
