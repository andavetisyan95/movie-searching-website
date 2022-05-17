//react hooks
import React, { useState } from "react";
import { useNavigate } from "react-router";
// components
import { Link, useSearchParams } from "react-router-dom";

//styles
import s from "../styles/SearchPage.module.scss";

export default function SearchPage() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();

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
      <div className={s.search_page_cont}>Find your favourite movie</div>
      <div className={s.search_page_div}>
        <input
          className={s.search_page_div_input}
          type="text"
          placeholder="Search for a movie..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyPress={handleEnter}
        />
        <button className={s.search_page_div_input_btn}>
          <Link
            // onClick={() => setSearchParams({ movieTitle: title })}
            className={s.search_page_div_input_btn_link}
            to={`/searchResult?movie_title=${title}`}
          >
            Search
          </Link>
        </button>
      </div>
      <div id="search_results" className={s.search_page_res}>
        Ando
      </div>
    </div>
  );
}
