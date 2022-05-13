//react hooks
import { Route, Routes } from "react-router";
//componets
import SearchPage from "./components/SearchPage";
import SearchResult from "./components/SearchResult";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/searchResult/:movieTitle" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
