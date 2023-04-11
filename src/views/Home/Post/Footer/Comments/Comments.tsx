import ChevronDown from "@components/Icons/ChevronDown";
import React from "react";

function Comments() {
  return (
    <div>
      <header className="flex items-center justify-between py-2.5">
        <p className="dark:text-light-100 text-primaryBlack flex items-center gap-x-1">
          <span>All comments</span>
          <span>
            <ChevronDown />
          </span>
        </p>

        <p className="flex items-center gap-x-1.5 dark:text-light-100 text-primaryBlack">
          <span className="opacity-60">Sort by</span>
          <span>Most popular</span>
        </p>
      </header>
    </div>
  );
}

export default Comments;
