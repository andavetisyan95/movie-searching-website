//react hooks
import { Route, Routes } from "react-router";
//componets
import SearchPage from "./components/SearchPage";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
