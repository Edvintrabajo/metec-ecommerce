import React from "react";
import { hideFilters } from "../controllers/filters/filters.functions";

function FilterBg() {
  return (
    <div
      id="filter-container"
      onClick={() => {
        hideFilters("filter-container");
      }}
      className="fixed top-0 left-0 hidden w-full h-screen bg-b-rgba-4 text-white"
    ></div>
  );
}

export default FilterBg;
