//react hooks
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//images
import noImgPic from "../public/images/noImg.jpg";

//styles
import s from "../styles/SearchPage.module.scss";

export default function SearchPage() {
  //useState hook
  const [movieTitle, setMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  //navigate hook
  const navigate = useNavigate();

  //envs
  const { REACT_APP_IMG_API, REACT_APP_API_SEARCH } = process.env;

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (e.target.value === undefined || e.target.value === "") {
        navigate("*");
      } else {
        e.preventDefault();
        setMovieTitle(e.target.value);
        navigate(`/searchResult?movie_title=${movieTitle}`);
      }
    }
  };

  useEffect(() => {
    if (movieTitle.length >= 1 && movieTitle !== undefined) {
      const handle = setTimeout(() => {
        fetch(`${REACT_APP_API_SEARCH}${movieTitle}`)
          .then(res => res.json())
          .then(results => {
            setMovies(results.results);
          });
      }, 500);
      return () => {
        clearTimeout(handle);
      };
    }
  }, [movieTitle]);

  //received s strings of titles from request
  const titleArray = [];
  movies?.filter(({ title }) => {
    return titleArray.push(title.toLowerCase());
  });
  const stringArr = titleArray.toString();

  return (
    <div className={s.search_page}>
      <div className={s.search_page_cont}>Find your favourite movie</div>
      <div className={s.search_page_div}>
        <input
          className={s.search_page_div_input}
          type="text"
          placeholder="Search for a movie..."
          value={movieTitle}
          onChange={e => setMovieTitle(e.target.value)}
          onKeyPress={handleEnter}
        />
        <button className={s.search_page_div_input_btn}>
          <Link
            className={s.search_page_div_input_btn_link}
            to={stringArr.includes(movieTitle) ? `/searchResult?movie_title=${movieTitle}` : "*"}
          >
            Search
          </Link>
        </button>
      </div>
      <div className={movieTitle.length >= 1 ? s.block : s.search_page_res}>
        {movies?.map(({ title, id, poster_path }) => (
          <Link className={s.search_page_res_link} to={`/aboutMovie?movie_title=${movieTitle}&film_id=${id}`} key={id}>
            <img
              className={s.search_page_res_link_img}
              src={poster_path ? REACT_APP_IMG_API + poster_path : noImgPic}
              alt="moviePoster"
            />
            <p className={s.search_page_res_link_p}>{title}</p>
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
