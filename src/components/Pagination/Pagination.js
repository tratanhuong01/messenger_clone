import React from "react";
import ItemPagination from "./ItemPagination/ItemPagination";

function Pagination(props) {
  return (
    <div className="flex items-center justify-center p-3">
      <ItemPagination />
      <ItemPagination />
    </div>
  );
}

export default Pagination;
