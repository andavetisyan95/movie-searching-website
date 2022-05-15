import React from "react";
import { useNavigate } from "react-router";
//styles
import s from "../styles/SearchResult.module.scss";

export default function PagesHeder({ movieTitle }) {
  //react hooks
  const navigate = useNavigate();
  return (
    <div>
      <div className={s.search_result_back}>
        <img
          onClick={() => navigate(-1)}
          className={s.search_result_back_btn}
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
          alt="back_btn"
        />
        <h3 className={s.search_result_back_title}>{movieTitle}</h3>
      </div>
    </div>
  );
}
