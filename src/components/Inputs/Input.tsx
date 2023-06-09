import Search from "@components/Icons/Search";
import React from "react";

function Input() {
  return (
    <div className="relative">
      <input
        type="text"
        className="py-2.5 pl-10 dark:bg-dark-400 w-full pr-3 rounded-md _borderLight outline-none dark:text-white placeholder:opacity-50"
        placeholder="Explore..."
      />

      <span className="absolute pointer-events-none left-3 top-1/2 -translate-y-1/2 dark:text-white/80 opacity-60">
        <Search />
      </span>
    </div>
  );
}

export default Input;
