//react, react hooks
import React from "react";
import { useNavigate } from "react-router";
//images
import rightArrowPic from "../public/images/right-arrow.png";
//styles
import s from "../styles/ErrorPage.module.scss";

export default function PageNotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className={s.container}>
      <div className={s.container_div}>
        <div onClick={handleBack} className={s.container_div_btn}>
          <p className={s.container_div_btn_text}>Back to home</p>
          <img src={rightArrowPic} className={s.container_div_btn_img} />
        </div>
      </div>
    </div>
  );
}
