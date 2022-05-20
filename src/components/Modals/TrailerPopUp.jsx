import React from "react";
import { videoAPI } from "../../helpers/consts";
//styles
import s from "../../styles/PopUp.module.scss";

export default function TrailerPopUp({ onClose, key }) {
  return (
    <div className={s.popup_board}>
      <div className={s.popup_board_cont}>
        <img
          onClick={onClose}
          className={s.popup_board_cont_btn}
          src="https://img.icons8.com/windows/30/000000/macos-close.png"
          alt="close"
        />
        <iframe className={s.popup_board_cont_video} src={videoAPI + key}></iframe>
      </div>
    </div>
  );
}
