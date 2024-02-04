import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Details from "./pages/Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
