import React from "react";

function TrendingList() {
  return (
    <li className="flex justify-between items-center py-1">
      <div>
        <h5 className="dark:text-light-200 text-primaryBlack font-medium">
          Figma maintenance
        </h5>
        <span className="text-xs dark:text-primaryWhite text-primaryBlack -translate-y-1 inline-block">
          120 posts toady{" "}
        </span>
      </div>

      <span className="text-xs text-light-400 bg-dark-400 px-2 py-0.5 rounded-md">
        65 in 1 hour
      </span>
    </li>
  );
}

export default TrendingList;
