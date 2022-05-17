//react hooks
import { Route, Routes } from "react-router";
//componets
import SearchPage from "./pages/SearchPage";
import SearchResult from "./pages/SearchResult";
import AboutMovie from "./pages/AboutMovie";
import PageNotFound from "./pages/PageNotFound ";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/aboutMovie" element={<AboutMovie />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
