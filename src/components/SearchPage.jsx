//react hooks
import React, { useState } from "react";

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
      <Link to={`/searchResult/${title}`}>
        <button className={s.search_page_input_btn}>Search</button>
      </Link>
    </div>
  );
}
