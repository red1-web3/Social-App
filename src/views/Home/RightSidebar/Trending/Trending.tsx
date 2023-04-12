import ChevronDown from "@components/Icons/ChevronDown";
import React from "react";

function Trending() {
  return (
    <div className="_border rounded-md">
      <button className="flex items-center justify-between dark:text-light-200 w-full py-2.5 px-3">
        <h5>Today Trending</h5>
        <span>
          <ChevronDown />
        </span>
      </button>

      {/* Down part --Start-- */}
      <div></div>
      {/* Down part --End-- */}
    </div>
  );
}

export default Trending;
