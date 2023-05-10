import React from "react";
import "./App.css";
import Stories from "./components/Stories";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
