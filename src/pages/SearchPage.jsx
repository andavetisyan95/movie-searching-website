//react hooks
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
//consts
import { searchAPI, key } from "../helpers/consts";
//styles
import s from "../styles/SearchPage.module.scss";

export default function SearchPage() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (e.target.value !== undefined) {
        e.preventDefault();
        setTitle(e.target.value);
        navigate(`/searchResult?movie_title=${title}`);
      }
    }
  };

  useEffect(() => {
    if (title.length >= 1 && title !== undefined) {
      const handle = setTimeout(() => {
        fetch(`${searchAPI}search/movie?api_key=${key}&query=${title}`)
          .then(res => res.json())
          .then(results => {
            setMovies(results.results);
          });
      }, 1000);
      return () => {
        clearTimeout(handle);
      };
    }
  }, [title]);

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
          <Link className={s.search_page_div_input_btn_link} to={`/searchResult?movie_title=${title}`}>
            Search
          </Link>
        </button>
      </div>
      <div className={title.length >= 1 ? s.block : s.search_page_res}>
        {movies?.map(({ title, id }) => (
          <Link className={s.search_page_res_link} to={`/aboutMovie?movie_title=${title}&film_id=${id}`} key={id}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

// useEffect(() => {
//     startTransition(() => {
//       fetch(`${searchAPI}search/movie?api_key=${key}&query=${title}`)
//         .then(res => res.json())
//         .then(results => {
//           setMovies(results.results);
//         });
//     });
//   }, [title]);
// const [isPending, startTransition] = useTransition();
