//react hooks
import React, { useState } from "react";
// components
import { Link } from "react-router-dom";

//styles
import s from "../styles/SearchPage.module.scss";

export default function SearchPage() {
  const [title, setTitle] = useState("");

  return (
    <div className={s.search_page}>
      <p className={s.search_page_cont}>Find your favourite movie</p>
      <input
        className={s.search_page_input}
        type="text"
        placeholder="Search for a movie..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className={s.search_page_input_btn}>
        <Link className={s.search_page_input_btn_link} to={`/searchResult/${title}`}>
          Search
        </Link>
      </button>
    </div>
  );
}

// let search;
// if (e.target.value) {
//   search = {
//     keyword: e.target.value
//   };
// } else {
//   search = undefined;
// }
// setSearchParams(search, { replace: true });
