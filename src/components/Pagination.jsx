import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { page, nbPages, getPreviousPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPreviousPage()}>PREV PAGE</button>
        <p>
          {page+1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT PAGE</button>
      </div>
    </>
  );
};

export default Pagination;
