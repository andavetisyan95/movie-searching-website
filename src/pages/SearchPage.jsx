//react hooks
import React, { useState } from "react";
import { useNavigate } from "react-router";
// components
import { Link } from "react-router-dom";

//styles
import s from "../styles/SearchPage.module.scss";

export default function SearchPage() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (e.target.value !== undefined) {
        e.preventDefault();
        setTitle(e.target.value);
        navigate(`/searchResult/${title}`);
      }
    }
  };

  return (
    <div className={s.search_page}>
      <p className={s.search_page_cont}>Find your favourite movie</p>
      <input
        className={s.search_page_input}
        type="text"
        placeholder="Search for a movie..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyPress={handleEnter}
      />
      <button className={s.search_page_input_btn}>
        <Link className={s.search_page_input_btn_link} to={`/searchResult/${title}`}>
          Search
        </Link>
      </button>
    </div>
  );
}
