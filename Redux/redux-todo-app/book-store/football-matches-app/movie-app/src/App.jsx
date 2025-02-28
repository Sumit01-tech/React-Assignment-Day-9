import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./Components/MovieList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </Router>
  );
};

export default App;
