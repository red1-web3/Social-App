import ChevronDown from "@components/Icons/ChevronDown";
import React from "react";
import TrendingList from "./TrendingList";

function Trending() {
  return (
    <div className="_border rounded-md">
      <button className="flex items-center justify-between dark:text-light-200 w-full py-2.5 px-3">
        <h5 className="font-medium text-lg">Today Trending</h5>
        <span>
          <ChevronDown />
        </span>
      </button>

      {/* Down part --Start-- */}
      <div>
        <ul className="px-3">
          <TrendingList />
          <TrendingList />
          <TrendingList />
          <TrendingList />
        </ul>

        <button className="text-primary font-medium py-3 block w-full text-center border-t border-gray-400/20 ">
          See all
        </button>
      </div>
      {/* Down part --End-- */}
    </div>
  );
}

export default Trending;
