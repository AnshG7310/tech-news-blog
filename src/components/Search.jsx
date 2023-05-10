import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>Blog Posts Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search POST"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
